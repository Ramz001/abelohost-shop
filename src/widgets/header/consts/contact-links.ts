import { Phone, Mail, MapPin } from 'lucide-react'
import type * as LucideIcons from 'lucide-react'

type ContactLink = {
  href: string
  icon: LucideIcons.LucideIcon
  text: string
}

export const contactLinks: ContactLink[] = [
  {
    href: 'tel:+021955184',
    icon: Phone,
    text: '+021-95-51-84',
  },
  {
    href: 'mailto:shop@abelohost.com',
    icon: Mail,
    text: 'shop@abelohost.com',
  },
  {
    href: '#',
    icon: MapPin,
    text: '1734 Stonecoal Road',
  },
]
