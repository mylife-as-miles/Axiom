export interface AgentLog {
  id: string;
  actionName: string;
  agentName: string;
  status: 'Executed' | 'Pending Approval' | 'Failed';
  time: string;
  icon: string;
  iconColorClass: string;
  iconBgClass: string;
  statusColorClass: string;
  statusBgClass: string;
}

export interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down' | 'stable';
  confidence: string;
  chartType: 'bars' | 'wave' | 'segments';
}
