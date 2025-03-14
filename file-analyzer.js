var fs = require('fs');
var path = require('path');

// Map of file content signatures to destinations
var fileSignatures = {
  "export interface MetricCardProps": { path: "src/types/dashboard.types.ts", desc: "Dashboard Types" },
  "export interface MarketplaceStats": { path: "src/types/marketplace.types.ts", desc: "Marketplace Types" },
  "export interface ProviderStats": { path: "src/types/provider.types.ts", desc: "Provider Types" },
  "export const trafficData": { path: "src/data/dashboardData.ts", desc: "Dashboard Data" },
  "export const connectedMarketplaces": { path: "src/data/marketplaceData.ts", desc: "Marketplace Data" },
  "export const connectedProviders": { path: "src/data/providerData.ts", desc: "Provider Data" },
  "export const dashboardApi": { path: "src/data/mockApi.ts", desc: "Mock API" },
  "const Header: React.FC<HeaderProps>": { path: "src/components/layout/Header.tsx", desc: "Header Component" },
  "const Sidebar: React.FC<SidebarProps>": { path: "src/components/layout/Sidebar.tsx", desc: "Sidebar Component" },
  "const MainLayout: React.FC<MainLayoutProps>": { path: "src/components/layout/MainLayout.tsx", desc: "Main Layout Component" },
  "const MetricCard: React.FC<MetricCardProps>": { path: "src/components/dashboard/widgets/MetricCard.tsx", desc: "Metric Card Widget" },
  "const TrafficAnalyticsWidget: React.FC<WidgetProps>": { path: "src/components/dashboard/widgets/TrafficAnalyticsWidget.tsx", desc: "Traffic Analytics Widget" },
  "const ActivityFeedWidget: React.FC<WidgetProps>": { path: "src/components/dashboard/widgets/ActivityFeedWidget.tsx", desc: "Activity Feed Widget" },
  "const TrafficSourcesWidget: React.FC<WidgetProps>": { path: "src/components/dashboard/widgets/TrafficSourcesWidget.tsx", desc: "Traffic Sources Widget" },
  "const QuickActionsWidget: React.FC<WidgetProps>": { path: "src/components/dashboard/widgets/QuickActionsWidget.tsx", desc: "Quick Actions Widget" },
  "const DashboardHeader: React.FC<DashboardHeaderProps>": { path: "src/components/dashboard/DashboardHeader.tsx", desc: "Dashboard Header Component" },
  "const AddWidgetButton: React.FC<AddWidgetButtonProps>": { path: "src/components/dashboard/AddWidgetButton.tsx", desc: "Add Widget Button Component" },
  "const AddWidgetModal: React.FC<AddWidgetModalProps>": { path: "src/components/dashboard/AddWidgetModal.tsx", desc: "Add Widget Modal Component" },
  "const MarketplaceCard: React.FC<MarketplaceCardProps>": { path: "src/components/marketplaces/MarketplaceCard.tsx", desc: "Marketplace Card Component" },
  "const ConnectMarketplace: React.FC<ConnectMarketplaceProps>": { path: "src/components/marketplaces/ConnectMarketplace.tsx", desc: "Connect Marketplace Component" },
  "const ProviderCard: React.FC<ProviderCardProps>": { path: "src/components/providers/ProviderCard.tsx", desc: "Provider Card Component" },
  "const ConnectProvider: React.FC<ConnectProviderProps>": { path: "src/components/providers/ConnectProvider.tsx", desc: "Connect Provider Component" },
  "const Dashboard: React.FC = () => {": { path: "src/pages/Dashboard.tsx", desc: "Dashboard Page" },
  "const Marketplaces: React.FC = () => {": { path: "src/pages/Marketplaces.tsx", desc: "Marketplaces Page" },
  "const Providers: React.FC = () => {": { path: "src/pages/Providers.tsx", desc: "Providers Page" },
  "const App: React.FC = () => {": { path: "src/App.tsx", desc: "App Component" },
  "// Dashboard Component": { path: "src/App.tsx", desc: "Dashboard UI (Main App)" },
  "export default function Dashboard": { path: "src/App.tsx", desc: "Dashboard UI (Main App)" }
};

// Get all files from parent directory
var parentDir = path.resolve('../');
console.log('Scanning directory:', parentDir);

var filesCopied = [];
var filesFound = 0;

try {
  var files = fs.readdirSync(parentDir);
  console.log('Found', files.length, 'files in directory');
  filesFound = files.length;

  // Scan each file for signatures
  files.forEach(function(file) {
    var filePath = path.join(parentDir, file);
    var stats = fs.statSync(filePath);

    if (stats.isFile()) {
      try {
        var content = fs.readFileSync(filePath, 'utf8');

        // Check each signature
        for (var signature in fileSignatures) {
          if (content.includes(signature)) {
            var destination = fileSignatures[signature].path;
            var description = fileSignatures[signature].desc;
            console.log('Found', description, 'in file:', file);

            // Create destination directory if it doesn't exist
            var destDir = path.dirname(destination);
            if (!fs.existsSync(destDir)) {
              fs.mkdirSync(destDir, { recursive: true });
            }

            // Copy file to destination
            fs.copyFileSync(filePath, destination);
            console.log('Copied to:', destination);
            filesCopied.push(destination);
            break; // Stop checking signatures for this file
          }
        }
      } catch (readErr) {
        console.error('Error reading file:', file, readErr.message);
      }
    }
  });
} catch (err) {
  console.error('Error scanning directory:', err.message);
}

// Create basic files if needed
var basicFiles = {
