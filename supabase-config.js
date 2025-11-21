// Supabase配置
const SUPABASE_URL = 'https://wgqungehwqjfkymgzhgc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndncXVuZ2Vod3FqZmt5bWd6aGdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NzAxMDYsImV4cCI6MjA3OTI0NjEwNn0.R1lwxpSlOOfFS7HJIpJnPtaSZoOutcL-zNPB_xmmg0s';

// 初始化Supabase客户端
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 卡密状态枚举
const KEY_STATUS = {
    ACTIVE: 'active',
    USED: 'used',
    EXPIRED: 'expired'
};

// 数据库表名
const TABLES = {
    CARDS: 'cards',
    USAGE_LOGS: 'usage_logs',
    ANNOUNCEMENTS: 'announcements'
};
