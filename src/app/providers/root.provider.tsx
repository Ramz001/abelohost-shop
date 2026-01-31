import HeaderWidget from '@widgets/header'
import FooterWidget from '@widgets/footer'
import { ToastProvider } from './toast.provider'

export default function RootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderWidget />
      <ToastProvider>{children}</ToastProvider>
      <FooterWidget />
    </>
  )
}
