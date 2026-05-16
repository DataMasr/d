let currentUser = null;
let currentProfile = null;

async function initAuth() {
  const sb = getSupabase();
  const { data: { session }, error } = await sb.auth.getSession();

  if (!session) {
    if (!window.location.pathname.includes('login.html')) {
      window.location.href = 'client_orders.html';
    }
    return null;
  }

  currentUser = session.user;

  const { data: profile, error: profileError } = await sb
    .from('profiles')
    .select('*')
    .eq('id', currentUser.id)
    .single();

  if (profileError) {
    console.error('Profile fetch error:', profileError);
    if (profileError.code === 'PGRST116') {
      showAlert('المستخدم غير مسجل في النظام. اتصل بالأدمن.', 'error');
      await logout();
      return null;
    }
  }

  currentProfile = profile;

  if (window.location.pathname.includes('login.html')) {
    window.location.href = 'client_orders.html';
    return null;
  }

  updateSidebarUser();
  enforceRoutePermissions();
  return { user: currentUser, profile: currentProfile };
}

function updateSidebarUser() {
  const nameEl = document.getElementById('user-name');
  const roleEl = document.getElementById('user-role');
  const avatarEl = document.getElementById('user-avatar');

  if (!currentProfile) return;

  if (nameEl) nameEl.textContent = currentProfile.full_name || currentProfile.email;
  if (roleEl) roleEl.textContent = getRoleLabel(currentProfile.role);
  if (avatarEl) {
    const name = currentProfile.full_name || currentProfile.email;
    avatarEl.textContent = name.charAt(0).toUpperCase();
  }
}

function getRoleLabel(role) {
  return 'مدير النظام';
}

function hasRole(roles) {
  return true;
}

function enforceRoutePermissions() {
  // No restrictions, everyone is admin
}

function hideUnauthorizedElements() {
  // Show everything
}

async function login(email, password) {
  const sb = getSupabase();
  const { data, error } = await sb.auth.signInWithPassword({ email, password });

  if (error) {
    showAlert(error.message === 'Invalid login credentials' ? 'البريد أو كلمة المرور غير صحيحة' : error.message, 'error');
    return false;
  }

  window.location.href = 'index.html';
  return true;
}

async function logout() {
  const sb = getSupabase();
  await sb.auth.signOut();
  window.location.href = 'login.html';
}

function showAlert(message, type = 'error') {
  const container = document.getElementById('alert-container');
  if (!container) return;

  const div = document.createElement('div');
  div.className = `alert alert-${type}`;
  div.textContent = message;
  container.innerHTML = '';
  container.appendChild(div);

  setTimeout(() => div.remove(), 5000);
}

async function getProfiles() {
  const sb = getSupabase();
  const { data, error } = await sb.from('profiles').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

async function updateUserRole(userId, role) {
  const sb = getSupabase();
  const { error } = await sb.from('profiles').update({ role }).eq('id', userId);
  if (error) throw error;
}

document.addEventListener('DOMContentLoaded', async () => {
  if (window.supabase) {
    await initAuth();
    hideUnauthorizedElements();
  }
});
