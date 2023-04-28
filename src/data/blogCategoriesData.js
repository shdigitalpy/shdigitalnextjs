import homeIcon from '../assets/icons/home.svg';
import seoIcon from '../assets/icons/seo.svg';
import marketingIcon from '../assets/icons/marketing.svg';
import hostingServicesIcon from '../assets/icons/hosting-services.svg';
import shoppingBagIcon from '../assets/icons/shopping-bag.svg';

export default {
    categories: [
        {
            icon: homeIcon,
            name: 'Übersicht',
            alias: 'overview',
            path: '/blog'
        },
        {
            icon: shoppingBagIcon,
            name: 'Ressourcen',
            alias: 'resources',
            path: '/resources'
        },
        {
            icon: seoIcon,
            name: 'SEO',
            alias: 'seo',
            path: '/seo'
        },
        {
            icon: marketingIcon,
            name: 'Content Marketing',
            alias: 'content-marketing',
            path: '/content-marketing'
        },
        {
            icon: hostingServicesIcon,
            name: 'Saas Marketing',
            alias: 'saas-marketing',
            path: '/saas-marketing'
        },
        {
            icon: shoppingBagIcon,
            name: 'E-Commerce Marketing',
            alias: 'ecommerce-marketing',
            path: '/e-commerce-marketing'
        },
        
    ]
};
