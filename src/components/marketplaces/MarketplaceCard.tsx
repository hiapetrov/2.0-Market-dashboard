import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Marketplace } from '../../entities/marketplace';
import { renderIcon } from '../../shared/lib';
import { Card } from '../../shared/ui';

interface MarketplaceCardProps {
  marketplace: Marketplace;
}

const MarketplaceCard: React.FC<MarketplaceCardProps> = ({ marketplace }) => {
  const { name, iconName, connected, syncStatus, colorFrom, colorTo, stats } = marketplace;
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  return (
    <Card gradient={{ from: colorFrom, to: colorTo }}>
      <div className="flex items-center mb-4 pt-3">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorFrom} ${colorTo} flex items-center justify-center text-white mr-4`}>
          {renderIcon(iconName)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{connected ? `Connected · ${syncStatus}` : 'Not connected'}</p>
        </div>
        <button className={`ml-auto bg-gradient-to-r ${colorFrom} ${colorTo} text-white px-4 py-2 rounded-md text-sm shadow-sm`}>
          Manage Store
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Products</p>
          <p className="text-xl font-bold text-gray-900">{stats.products.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Orders (30d)</p>
          <p className="text-xl font-bold text-gray-900">{stats.orders.toLocaleString()}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Revenue (30d)</p>
          <p className="text-xl font-bold text-gray-900">{formatCurrency(stats.revenue)}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Conversion</p>
          <p className="text-xl font-bold text-gray-900">{stats.conversion.toFixed(1)}%</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="text-indigo-600 text-sm flex items-center">
          SEO Analysis <ExternalLink className="h-3 w-3 ml-1" />
        </button>
        <button className="text-indigo-600 text-sm flex items-center">
          Bulk Edit Products <ExternalLink className="h-3 w-3 ml-1" />
        </button>
      </div>
    </Card>
  );
};

export default MarketplaceCard;