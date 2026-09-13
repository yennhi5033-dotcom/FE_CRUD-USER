export const stats = [
  {
    label: 'Total Users',
    value: '1,248',
    note: 'Across all active workspaces',
    accent: 'indigo',
    icon: 'users',
  },
  {
    label: 'New Users',
    value: '+42',
    note: 'In the last 30 days',
    accent: 'emerald',
    icon: 'sparkles',
  },
  {
    label: 'Active Emails',
    value: '98%',
    note: 'Verified and reachable',
    accent: 'slate',
    icon: 'mail',
  },
  {
    label: 'Average Age',
    value: '28.5',
    note: 'Years old',
    accent: 'violet',
    icon: 'calendar',
  },
]

export const users = [
  {
    id: 'UF-2048',
    initials: 'ER',
    name: 'Elena Rodriguez',
    email: 'elena.r@example.com',
    age: 29,
    createdAt: 'Oct 12, 2023',
    status: 'Active',
    active: true,
  },
  {
    id: 'UF-2049',
    initials: 'MJ',
    name: 'Marcus Johnson',
    email: 'mjohnson.dev@startup.io',
    age: 34,
    createdAt: 'Oct 10, 2023',
    status: 'Invited',
    active: false,
  },
  {
    id: 'UF-2050',
    initials: 'AC',
    name: 'Alex Chen',
    email: 'achen88@domain.net',
    age: 27,
    createdAt: 'Sep 28, 2023',
    status: 'Pending Delete',
    active: false,
    highlighted: true,
  },
  {
    id: 'UF-2051',
    initials: 'SW',
    name: 'Sarah Williams',
    email: 'sarah.w@corporate.com',
    age: 31,
    createdAt: 'Sep 15, 2023',
    status: 'Active',
    active: true,
  },
  {
    id: 'UF-2052',
    initials: 'NT',
    name: 'Nia Taylor',
    email: 'nia.t.design@studio.co',
    age: 26,
    createdAt: 'Sep 02, 2023',
    status: 'Active',
    active: true,
  },
]

export const formFields = [
  {
    label: 'Full Name',
    placeholder: 'e.g. Jane Doe',
    type: 'text',
  },
  {
    label: 'Email Address',
    placeholder: 'jane@example.com',
    type: 'email',
    state: 'error',
    helperText: 'Please enter a valid email address',
  },
  {
    label: 'Age',
    placeholder: 'Enter age',
    type: 'number',
  },
]
