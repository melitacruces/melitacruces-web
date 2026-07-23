import { portfolioData } from '@/data/portfolioData';

const whatsappNumber = portfolioData.hero.phone.replace(/\D/g, '');

export const whatsappUrl = `https://wa.me/${whatsappNumber}`;
