import localFont from 'next/font/local'

export const geist = localFont({
  src: [
    {
      path: './GeistVF.woff',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './GeistMonoVF.woff',
      weight: '100 900',
      style: 'monospace',
    },
  ],
  variable: '--font-geist',
})