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
            name: 'Content',
            alias: 'content',
            path: '/content'
        },
       
        {
            icon: shoppingBagIcon,
            name: 'E-Commerce',
            alias: 'ecommerce',
            path: '/e-commerce'
        },
        
    ]
};
