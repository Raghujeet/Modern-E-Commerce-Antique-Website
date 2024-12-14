import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Package, Heart, Settings } from 'lucide-react';
import Button from '../components/ui/Button';
import ProfileInfo from '../components/profile/ProfileInfo';
import OrderHistory from '../components/profile/OrderHistory';
import Favorites from '../components/profile/Favorites';
import AccountSettings from '../components/profile/AccountSettings';

type TabType = 'profile' | 'orders' | 'favorites' | 'settings';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'orders', label: 'Orders', icon: Package },
  { id: 'favorites', label: 'Favorites', icon: Heart },
  { id: 'settings', label: 'Settings', icon: Settings },
] as const;

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif text-gray-900">Please sign in to view your profile</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif text-gray-900 mb-8">My Account</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-64">
            <nav className="space-y-1">
              {tabs.map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant={activeTab === id ? 'primary' : 'secondary'}
                  className="w-full justify-start"
                  onClick={() => setActiveTab(id)}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {label}
                </Button>
              ))}
            </nav>
          </div>

          <div className="flex-1">
            {activeTab === 'profile' && <ProfileInfo />}
            {activeTab === 'orders' && <OrderHistory />}
            {activeTab === 'favorites' && <Favorites />}
            {activeTab === 'settings' && <AccountSettings />}
          </div>
        </div>
      </div>
    </div>
  );
}