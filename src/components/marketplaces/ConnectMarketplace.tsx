import React from 'react';
import { AvailableMarketplace } from '../../entities/marketplace';
import { renderIcon } from '../../shared/lib';
import { Card } from '../../shared/ui';

interface ConnectMarketplaceProps {
  availableMarketplaces: AvailableMarketplace[];
  onConnect: (marketplaceId: string) => void;
}

const ConnectMarketplace: React.FC<ConnectMarketplaceProps> = ({
  availableMarketplaces,
  onConnect
}) => {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect New Marketplace</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {availableMarketplaces.map((marketplace) => (
          <button 
            key={marketplace.id}
            className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            onClick={() => onConnect(marketplace.id)}
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${marketplace.colorFrom} ${marketplace.colorTo} flex items-center justify-center text-white mb-2`}>
              {renderIcon(marketplace.iconName)}
            </div>
            <span className="text-sm text-gray-800">{marketplace.name}</span>
          </button>
        ))}
      </div>
    </Card>
  );
};

export default ConnectMarketplace;