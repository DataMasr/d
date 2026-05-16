function renderLayout() {
  if (document.getElementById('sidebar')) return;

  const sidebarHTML = `
    <!-- Mobile Header -->
    <div class="mobile-header">
      <h2 style="font-size:1.25rem; font-weight:800; color:var(--primary); margin:0;">نظام الإدارة</h2>
      <button class="mobile-toggle" onclick="toggleSidebar()">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
    
    <!-- Sidebar Overlay -->
    <div class="sidebar-overlay" onclick="toggleSidebar()"></div>

    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header" style="display:flex; justify-content:space-between; align-items:center;">
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <div style="width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#6366f1,#4f46e5);display:flex;align-items:center;justify-content:center;">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h2 style="margin:0; font-size:1.15rem;">نظام الإدارة</h2>
        </div>
        <div id="notif-bell" class="hidden" style="position:relative; cursor:pointer;" onclick="openNotificationsModal()">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span id="notif-count" style="position:absolute; top:-5px; right:-5px; background:#ff4444; color:white; border-radius:50%; width:18px; height:18px; font-size:10px; display:flex; align-items:center; justify-content:center; font-weight:bold; border:2px solid var(--sidebar-bg);">0</span>
        </div>
      </div>
      <nav class="sidebar-nav">
        <a href="client_orders.html" class="nav-item ${location.pathname.includes('client_orders.html') ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="3"/><path d="M8 7h8M8 11h5M8 15h3"/><circle cx="17" cy="14" r="3" fill="currentColor" opacity="0.25"/><path d="M16 14l1 1 2-2"/></svg>
          <span>طلبيات العملاء</span>
        </a>
        <a href="inventory.html" class="nav-item ${location.pathname.includes('inventory.html') ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" opacity="0.5"/></svg>
          <span>المخازن</span>
        </a>
        <a href="purchasing.html" class="nav-item ${location.pathname.includes('purchasing.html') ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5" fill="currentColor"/><circle cx="20" cy="21" r="1.5" fill="currentColor"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          <span>قسم الشراء</span>
        </a>
        <a href="pricing.html" class="nav-item ${location.pathname.includes('pricing.html') ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></svg>
          <span>قائمة الأسعار</span>
        </a>
        <a href="profits.html" class="nav-item ${location.pathname.includes('profits.html') ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /><rect x="1" y="20" width="22" height="2" rx="1" fill="currentColor" opacity="0.15"/></svg>
          <span>الأرباح والمصروفات</span>
        </a>
        <a href="accounts.html" class="nav-item ${location.pathname.includes('accounts.html') ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M2 10h20" opacity="0.4"/><path d="M6 15h4M14 15h4"/></svg>
          <span>الحسابات</span>
        </a>
        <a href="customers.html" class="nav-item ${location.pathname.includes('customers.html') ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" opacity="0.4"/></svg>
          <span>العملاء</span>
        </a>
        <a href="users.html" class="nav-item ${location.pathname.includes('users.html') ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
          <span>المستخدمين</span>
        </a>

      </nav>
      <div class="sidebar-footer">
        <div class="user-info">
          <div class="user-avatar" id="user-avatar">-</div>
          <div>
            <div id="user-name" style="font-weight:600;font-size:0.875rem">-</div>
            <div id="user-role" style="font-size:0.75rem;color:var(--text-muted)">-</div>
          </div>
        </div>
        <button class="btn btn-secondary btn-block btn-sm" onclick="logout()">تسجيل الخروج</button>
      </div>
    </aside>
    <div id="alert-container" style="position:fixed;top:1.5rem;left:1.5rem;z-index:9999;max-width:400px;display:flex;flex-direction:column;gap:0.5rem;"></div>

    <!-- Global Notifications Modal -->
    <div id="global-notifications-modal" class="modal-overlay hidden" style="z-index: 10000;">
      <div class="modal" style="max-width: 500px;">
        <div class="modal-header">
          <h3>تنبيهات الدفعات المتأخرة 🔔</h3>
          <button class="btn btn-secondary btn-sm" onclick="closeNotificationsModal()" style="padding:0.5rem">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="modal-body" id="notif-modal-body" style="max-height: 400px; overflow-y: auto; padding: 1rem;">
          <!-- Alerts injected here -->
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="closeNotificationsModal()">إغلاق</button>
        </div>
      </div>
    </div>

    <!-- Global Confirm Modal -->
    <div id="global-confirm-modal" class="modal-overlay hidden" style="z-index: 10001;">
      <div class="modal" style="max-width: 400px; text-align: center; padding: 2rem;">
        <div style="color:var(--warning); margin-bottom:1rem;">
          <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h3 id="confirm-msg" style="margin-bottom: 1.5rem; color:var(--text-main); font-size: 1.1rem; line-height: 1.5;"></h3>
        <div style="display:flex; gap: 1rem; justify-content: center;">
          <button id="confirm-btn-yes" class="btn btn-primary" style="flex:1;">تأكيد</button>
          <button id="confirm-btn-no" class="btn btn-secondary" style="flex:1;">إلغاء</button>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
  checkGlobalAlerts();

  setInterval(checkGlobalAlerts, 15000);
}

function customConfirm(message) {
  return new Promise((resolve) => {
    const modal = document.getElementById('global-confirm-modal');
    if (!modal) {
      resolve(confirm(message));
      return;
    }
    const msgEl = document.getElementById('confirm-msg');
    const btnYes = document.getElementById('confirm-btn-yes');
    const btnNo = document.getElementById('confirm-btn-no');

    msgEl.textContent = message;
    modal.classList.remove('hidden');

    const handleYes = () => { cleanup(); resolve(true); };
    const handleNo = () => { cleanup(); resolve(false); };

    function cleanup() {
      modal.classList.add('hidden');
      btnYes.removeEventListener('click', handleYes);
      btnNo.removeEventListener('click', handleNo);
    }

    btnYes.addEventListener('click', handleYes);
    btnNo.addEventListener('click', handleNo);
  });
}

async function checkGlobalAlerts() {
  if (typeof getSupabase === 'undefined') return;
  const sb = getSupabase();

  const normalizeDate = (d) => {
    const date = new Date(d);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  };
  const todayNormalized = normalizeDate(new Date());

  try {
    const [accRes, ordRes] = await Promise.all([
      sb.from('accounts').select('*'),
      sb.from('client_orders').select('*').eq('archived', false)
    ]);

    let lateItems = [];

    if (accRes.data) {
      accRes.data.forEach(acc => {
        const remaining = (acc.total_amount || 0) - (acc.paid_amount || 0);
        if (remaining > 0 && acc.due_date) {
          const dueDateNormalized = normalizeDate(acc.due_date);
          if (dueDateNormalized <= todayNormalized) {
            lateItems.push({
              id: acc.id,
              name: acc.person_name || acc.name,
              amount: remaining,
              date: new Date(acc.due_date),
              type: acc.account_type,
              source: 'accounts'
            });
          }
        }
      });
    }

    if (ordRes.data) {
      ordRes.data.forEach(order => {
        const remainingTotal = (order.total_price || 0) - (order.paid_amount || 0);
        if (remainingTotal <= 0) return;

        try {
          const installments = JSON.parse(order.payment_plan);
          if (Array.isArray(installments) && installments.length > 0) {
            const totalPlanned = installments.reduce((sum, inst) => sum + (parseFloat(inst.amount) || 0), 0);
            const downPayment = Math.max(0, (order.total_price || 0) - totalPlanned);

            let paidPool = Math.max(0, (order.paid_amount || 0) - downPayment);

            let orderLateAmount = 0;
            let lateCount = 0;
            let firstLateDate = null;

            installments.forEach((inst, index) => {
              const instAmt = parseFloat(inst.amount) || 0;
              const instDateNormalized = normalizeDate(inst.date);

              if (paidPool < instAmt) {
                if (instDateNormalized <= todayNormalized) {
                  orderLateAmount += instAmt;
                  lateCount++;
                  if (!firstLateDate) firstLateDate = new Date(inst.date);
                }
                paidPool = 0;
              } else {
                paidPool -= instAmt;
              }
            });

            if (lateCount > 0) {
              lateItems.push({
                id: order.id,
                name: order.client_name,
                amount: orderLateAmount,
                date: firstLateDate,
                type: 'receivable',
                source: lateCount > 1 ? `مجموع ${lateCount} قسط متأخر` : 'قسط متأخر'
              });
            }
            return;
          }
        } catch (e) { }

        if (order.delivery_date) {
          if (normalizeDate(order.delivery_date) <= todayNormalized) {
            lateItems.push({
              id: order.id,
              name: order.client_name,
              amount: remainingTotal,
              date: new Date(order.delivery_date),
              type: 'receivable',
              source: 'طلبية'
            });
          }
        }
      });
    }

    const today = new Date();
    const bell = document.getElementById('notif-bell');
    const count = document.getElementById('notif-count');
    const body = document.getElementById('notif-modal-body');

    if (lateItems.length > 0) {
      bell.classList.remove('hidden');
      bell.style.color = '#ff4444';
      bell.classList.add('pulse-animation');
      count.textContent = lateItems.length;

      body.innerHTML = '';
      lateItems.forEach(item => {
        const isClient = item.type === 'receivable';
        const itemDate = new Date(item.date);
        const diffTime = today.getTime() - itemDate.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        const alertCard = document.createElement('div');
        alertCard.className = 'notif-card';
        alertCard.style = `
          background: rgba(255,255,255,0.03);
          border: 1px solid ${diffDays > 0 ? '#ff4444' : '#f59e0b'};
          border-right: 5px solid ${diffDays > 0 ? '#ff4444' : '#f59e0b'};
          padding: 1rem; border-radius: 8px; margin-bottom: 1rem;
          display: flex; flex-direction: column; gap: 0.5rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        `;

        let daysText = '';
        if (diffDays > 0) {
          daysText = diffDays > 36500 ? 'تاريخ قديم جداً' : `متأخر ${diffDays} يوم`;
        } else {
          daysText = 'مستحق اليوم';
        }

        const dateStr = item.date ? new Date(item.date).toLocaleDateString('ar-EG') : '';

        alertCard.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <div style="font-weight:bold; color:${isClient ? 'var(--primary)' : '#ff4444'};">
              ${isClient ? 'تحصيل من عميل' : 'سداد لمورد'}
            </div>
            <div style="font-size:0.75rem; color:white; background:${diffDays > 0 ? '#ff4444' : '#f59e0b'}; padding:2px 8px; border-radius:10px;">
              ${daysText}
            </div>
          </div>
          <div style="font-size:1rem; margin-top:5px;">
            <a href="customers.html?search=${encodeURIComponent(item.name)}" 
               style="color:var(--text-main); font-weight:700; text-decoration:none; border-bottom:1px dashed var(--primary);">
               👤 ${item.name}
            </a>
          </div>
          <div style="margin-top:5px; border-top: 1px solid rgba(255,255,255,0.05); padding-top:5px;">
            <div style="font-size:0.75rem; color:var(--text-muted);">${isClient ? 'المبلغ المطلوب تحصيله الآن:' : 'المبلغ المطلوب سداده الآن:'}</div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div style="font-size:1.1rem; font-weight:800; color:#10b981;">${item.amount.toLocaleString()} جنيه</div>
              <div style="font-size:0.7rem; color:var(--text-muted);">المصدر: ${item.source} ${dateStr ? `(${dateStr})` : ''}</div>
            </div>
          </div>
        `;
        body.appendChild(alertCard);
      });
    } else {
      bell.classList.remove('hidden');
      bell.style.color = 'var(--text-muted)';
      bell.classList.remove('pulse-animation');
      count.textContent = '0';
      body.innerHTML = '<div style="text-align:center; padding:2rem; color:var(--text-muted);">لا توجد دفعات متأخرة حالياً ✅</div>';
    }
  } catch (e) { console.error('Failed to check global alerts', e); }
}

function openNotificationsModal() {
  document.getElementById('global-notifications-modal').classList.remove('hidden');
}

function closeNotificationsModal() {
  document.getElementById('global-notifications-modal').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  if (!location.pathname.includes('login.html')) {
    renderLayout();
  }

  const observer = new MutationObserver(() => {
    document.querySelectorAll('.data-table').forEach(table => {
      const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent.trim());
      table.querySelectorAll('tbody tr').forEach(tr => {
        Array.from(tr.querySelectorAll('td')).forEach((td, i) => {
          if (headers[i] && !td.hasAttribute('data-label') && !td.hasAttribute('colspan')) {
            td.setAttribute('data-label', headers[i]);
          }
        });
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
});

window.toggleSidebar = function () {
  document.getElementById('sidebar').classList.toggle('open');
  document.querySelector('.sidebar-overlay').classList.toggle('show');
};
