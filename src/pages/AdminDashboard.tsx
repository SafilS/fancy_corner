import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import {
  LogOut,
  RefreshCw,
  MessageSquare,
  ShoppingBag,
  Trash2,
  Phone,
  User,
  Clock,
  Inbox,
  Search,
} from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  message: string;
  created_at: string;
}

interface CustomOrderSubmission {
  id: string;
  name: string;
  phone: string;
  product: string;
  created_at: string;
}

type Tab = 'contacts' | 'orders';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('contacts');
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [orders, setOrders] = useState<CustomOrderSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchData = useCallback(async (showRefresh = false) => {
    if (showRefresh) setRefreshing(true);
    else setLoading(true);

    const [contactRes, orderRes] = await Promise.all([
      supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false }),
      supabase
        .from('custom_order_submissions')
        .select('*')
        .order('created_at', { ascending: false }),
    ]);

    if (contactRes.data) setContacts(contactRes.data);
    if (orderRes.data) setOrders(orderRes.data);

    setLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (table: string, id: string) => {
    setDeletingId(id);
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (!error) {
      if (table === 'contact_submissions') {
        setContacts((prev) => prev.filter((c) => c.id !== id));
      } else {
        setOrders((prev) => prev.filter((o) => o.id !== id));
      }
    }
    setDeletingId(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login', { replace: true });
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery) ||
      c.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredOrders = orders.filter(
    (o) =>
      o.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.phone.includes(searchQuery) ||
      o.product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin" />
          <p className="text-gray-400 font-bold tracking-[0.3em] uppercase text-xs">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand */}
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter text-black leading-none">
                FANCY <span className="text-primary">CORNER.</span>
              </h1>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mt-0.5">
                Admin Dashboard
              </p>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1 sm:gap-3">
              <button
                onClick={() => fetchData(true)}
                disabled={refreshing}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-400 hover:text-black hover:bg-gray-100 transition-all text-xs font-bold uppercase tracking-widest cursor-pointer disabled:opacity-50"
              >
                <RefreshCw
                  size={16}
                  className={refreshing ? 'animate-spin' : ''}
                />
                <span className="hidden sm:inline">Refresh</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-black text-white hover:bg-primary hover:text-black transition-all text-xs font-bold uppercase tracking-widest cursor-pointer border-2 border-black"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Page Header */}
        <div className="mb-16">
          <h2 className="text-[3rem] md:text-[4rem] font-display font-black text-black tracking-tighter uppercase leading-[0.85] mb-4">
            COMMAND <span className="text-primary">CENTER.</span>
          </h2>
          <p className="text-lg font-medium tracking-tight text-gray-400 border-l-4 border-primary pl-4 max-w-xl">
            Monitor incoming contact messages and custom order requests in real-time.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {/* Total Contacts */}
          <div className="border-4 border-black p-8 hover:bg-primary/5 transition-colors group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-primary transition-colors">
                <MessageSquare size={22} className="text-white group-hover:text-black transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Contact
              </span>
            </div>
            <p className="text-5xl font-display font-black text-black tracking-tighter">
              {contacts.length}
            </p>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mt-2">
              Messages received
            </p>
          </div>

          {/* Total Orders */}
          <div className="border-4 border-black p-8 hover:bg-primary/5 transition-colors group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-primary transition-colors">
                <ShoppingBag size={22} className="text-white group-hover:text-black transition-colors" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Orders
              </span>
            </div>
            <p className="text-5xl font-display font-black text-black tracking-tighter">
              {orders.length}
            </p>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mt-2">
              Custom requests
            </p>
          </div>

          {/* Total Combined */}
          <div className="border-4 border-black bg-black p-8 group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <Inbox size={22} className="text-black" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Total
              </span>
            </div>
            <p className="text-5xl font-display font-black text-primary tracking-tighter">
              {contacts.length + orders.length}
            </p>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mt-2">
              All submissions
            </p>
          </div>
        </div>

        {/* Tabs + Search Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b-4 border-black pb-6">
          {/* Tab Switcher */}
          <div className="flex">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`flex items-center gap-2 px-6 py-3 font-black uppercase tracking-wider text-sm transition-all cursor-pointer border-2 border-black ${
                activeTab === 'contacts'
                  ? 'bg-primary text-black'
                  : 'bg-white text-gray-400 hover:text-black hover:bg-gray-100'
              }`}
            >
              <MessageSquare size={16} />
              Contact Messages
              <span
                className={`ml-1 px-2 py-0.5 text-xs font-black ${
                  activeTab === 'contacts'
                    ? 'bg-black text-primary'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {contacts.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 px-6 py-3 font-black uppercase tracking-wider text-sm transition-all cursor-pointer border-2 border-black border-l-0 ${
                activeTab === 'orders'
                  ? 'bg-primary text-black'
                  : 'bg-white text-gray-400 hover:text-black hover:bg-gray-100'
              }`}
            >
              <ShoppingBag size={16} />
              Custom Orders
              <span
                className={`ml-1 px-2 py-0.5 text-xs font-black ${
                  activeTab === 'orders'
                    ? 'bg-black text-primary'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {orders.length}
              </span>
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search
              size={16}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by name, phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b-2 border-black pl-7 pr-2 py-3 text-sm font-bold text-black placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="border-4 border-black">
          {activeTab === 'contacts' ? (
            filteredContacts.length === 0 ? (
              <EmptyState type="contacts" hasSearch={!!searchQuery} />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-4 border-black bg-gray-50">
                      <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        Name
                      </th>
                      <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        Phone
                      </th>
                      <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        Message
                      </th>
                      <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        Date
                      </th>
                      <th className="text-right px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredContacts.map((contact, idx) => (
                      <tr
                        key={contact.id}
                        className={`border-b-2 border-gray-200 hover:bg-primary/5 transition-colors group ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                        }`}
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-black flex items-center justify-center shrink-0">
                              <User size={14} className="text-primary" />
                            </div>
                            <span className="font-black text-sm text-black uppercase tracking-wider">
                              {contact.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <a
                            href={`tel:${contact.phone}`}
                            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors tracking-wider"
                          >
                            <Phone size={12} />
                            {contact.phone}
                          </a>
                        </td>
                        <td className="px-6 py-5">
                          <p className="text-sm font-medium text-gray-600 max-w-xs truncate">
                            {contact.message}
                          </p>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 tracking-wider">
                            <Clock size={12} />
                            {formatDate(contact.created_at)}
                          </div>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <button
                            onClick={() =>
                              handleDelete('contact_submissions', contact.id)
                            }
                            disabled={deletingId === contact.id}
                            className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer disabled:opacity-50 border border-transparent hover:border-red-200"
                          >
                            <Trash2
                              size={16}
                              className={
                                deletingId === contact.id ? 'animate-pulse' : ''
                              }
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ) : filteredOrders.length === 0 ? (
            <EmptyState type="orders" hasSearch={!!searchQuery} />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-4 border-black bg-gray-50">
                    <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                      Name
                    </th>
                    <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                      Phone
                    </th>
                    <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                      Product / Requirement
                    </th>
                    <th className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                      Date
                    </th>
                    <th className="text-right px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, idx) => (
                    <tr
                      key={order.id}
                      className={`border-b-2 border-gray-200 hover:bg-primary/5 transition-colors group ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-black flex items-center justify-center shrink-0">
                            <User size={14} className="text-primary" />
                          </div>
                          <span className="font-black text-sm text-black uppercase tracking-wider">
                            {order.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <a
                          href={`tel:${order.phone}`}
                          className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors tracking-wider"
                        >
                          <Phone size={12} />
                          {order.phone}
                        </a>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-gray-600 max-w-xs truncate">
                          {order.product}
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400 tracking-wider">
                          <Clock size={12} />
                          {formatDate(order.created_at)}
                        </div>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button
                          onClick={() =>
                            handleDelete('custom_order_submissions', order.id)
                          }
                          disabled={deletingId === order.id}
                          className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer disabled:opacity-50 border border-transparent hover:border-red-200"
                        >
                          <Trash2
                            size={16}
                            className={
                              deletingId === order.id ? 'animate-pulse' : ''
                            }
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

/* Empty state component */
const EmptyState = ({
  type,
  hasSearch,
}: {
  type: 'contacts' | 'orders';
  hasSearch: boolean;
}) => (
  <div className="flex flex-col items-center justify-center py-24 text-center px-6">
    <div className="w-20 h-20 bg-gray-100 flex items-center justify-center mb-8">
      {type === 'contacts' ? (
        <MessageSquare size={32} className="text-gray-300" />
      ) : (
        <ShoppingBag size={32} className="text-gray-300" />
      )}
    </div>
    <h3 className="text-2xl font-display font-black uppercase tracking-tighter text-black mb-3">
      {hasSearch ? 'No results found' : `No ${type} yet`}
    </h3>
    <p className="text-sm text-gray-400 font-medium max-w-sm">
      {hasSearch
        ? 'Try adjusting your search query.'
        : type === 'contacts'
        ? 'When visitors send contact messages, they will appear here.'
        : 'When visitors submit custom order requests, they will appear here.'}
    </p>
  </div>
);

export default AdminDashboard;
