const makeDate = (hrsToAdd = 0) => {
  const date = new Date()
  if (hrsToAdd) {
    date.setHours(date.getHours() + hrsToAdd)
  }

  return date.getHours() + ':' + date.getMinutes() + ' PM'
}

export const messages = [
  {
    id: 1,
    sent: false,
    text: ['Can I request a late check-out for Room 305?'],
    avatar: 'https://lorem.toneflix.com.ng/images/image/10068',
    sender: 'Alice Johnson',
    createdAt: makeDate(-10)
  },
  {
    id: 2,
    sent: true,
    text: ['Hi Alice, we can accommodate a late check-out for you. How late would you like to stay?'],
    avatar: 'https://lorem.toneflix.com.ng/images/image/10069',
    sender: 'me',
    createdAt: makeDate(-8)
  },
  {
    id: 3,
    sent: false,
    text: ['I was hoping to stay until 2 PM. Is that possible?'],
    avatar: 'https://lorem.toneflix.com.ng/images/image/10068',
    sender: 'Alice Johnson',
    createdAt: makeDate(-7)
  },
  {
    id: 4,
    sent: true,
    text: ['Let me check the availability for Room 305. One moment, please.'],
    avatar: 'https://lorem.toneflix.com.ng/images/image/10069',
    sender: 'me',
    createdAt: makeDate(-6)
  },
  {
    id: 5,
    sent: true,
    text: ['Good news, Alice! We can extend your check-out time to 2 PM.'],
    avatar: 'https://lorem.toneflix.com.ng/images/image/10069',
    sender: 'me',
    createdAt: makeDate(-5)
  },
  {
    id: 6,
    sent: false,
    text: ['Thank you so much! That really helps.'],
    avatar: 'https://lorem.toneflix.com.ng/images/image/10068',
    sender: 'Alice Johnson',
    createdAt: makeDate(-4)
  },
  {
    id: 7,
    sent: true,
    text: ['You\'re welcome! If you need anything else, feel free to let us know.'],
    avatar: 'https://lorem.toneflix.com.ng/images/image/10069',
    sender: 'me',
    createdAt: makeDate(-3)
  },
]

export const conversations = [
  {
    id: 1,
    text: 'Can I request a late check-out for Room 305?',
    sender: 'Alice Johnson',
    avatar: 'https://lorem.toneflix.com.ng/images/image/10069',
    createdAt: makeDate(-10) // Assuming `makeDate()` returns a timestamp for 09:15 AM.
  },
  {
    id: 2,
    text: "The air conditioning in my room isn't working.",
    sender: 'Michael Brown',
    avatar: 'https://lorem.toneflix.com.ng/images/image/10070',
    createdAt: makeDate(-9.5), // 09:30 AM
    unreadMessages: 1
  },
  {
    id: 3,
    text: 'Can you confirm my airport pickup for tomorrow?',
    sender: 'Emily Davis',
    avatar: 'https://lorem.toneflix.com.ng/images/image/10071',
    createdAt: makeDate(-9), // 09:45 AM
    unreadMessages: 3
  },
  {
    id: 4,
    text: 'I need extra towels and pillows in Room 302.',
    sender: 'John Doe',
    avatar: 'https://lorem.toneflix.com.ng/images/image/10072',
    createdAt: makeDate(-8.75), // 10:00 AM
    unreadMessages: 1
  },
  {
    id: 5,
    text: 'Is breakfast included in my reservation?',
    sender: 'Jane Smith',
    avatar: 'https://lorem.toneflix.com.ng/images/image/10073',
    createdAt: makeDate(-8.5), // 10:15 AM
    unreadMessages: 2
  },
  {
    id: 6,
    text: 'What are the pool hours?',
    sender: 'Daniel Wilson',
    avatar: 'https://lorem.toneflix.com.ng/images/image/10074',
    createdAt: makeDate(-8.25), // 10:30 AM
    unreadMessages: 2
  },
  {
    id: 7,
    text: 'Can you help me with a reservation for dinner tonight?',
    sender: 'Sarah Johnson',
    avatar: 'https://lorem.toneflix.com.ng/images/image/10075',
    createdAt: makeDate(-8), // 10:45 AM
    unreadMessages: 4
  },
  {
    id: 8,
    text: 'I need to extend my stay for two more nights.',
    sender: 'Kevin Lee',
    avatar: 'https://lorem.toneflix.com.ng/images/image/10076',
    createdAt: makeDate(-7.75), // 11:00 AM
    unreadMessages: 1
  },
  {
    id: 9,
    text: "There's a noise issue in the room next to mine.",
    sender: 'Laura Martin',
    avatar: 'https://lorem.toneflix.com.ng/images/image/10077',
    createdAt: makeDate(-7.5), // 11:15 AM
    unreadMessages: 3
  },
  {
    id: 10,
    text: 'Could you send someone to fix the TV in Room 308?',
    sender: 'Robert King',
    avatar: 'https://lorem.toneflix.com.ng/images/image/10078',
    createdAt: makeDate(-7.25), // 11:30 AM
    unreadMessages: 4
  }
];

export const buildMessage = (text, messages = [], sender = null) => {
  if (text) {
    return {
      id: messages.length + 1,
      sent: !sender,
      text: [text],
      avatar: 'https://lorem.toneflix.com.ng/images/image/10069',
      sender: sender ?? 'me',
      createdAt: makeDate(0)
    }
  }
}
