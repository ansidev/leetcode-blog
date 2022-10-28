export const formatDate = (date: string | Date) => (date instanceof Date ? date : new Date(date)).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
