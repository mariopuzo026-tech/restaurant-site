// მენიუს მონაცემები
const menuData = [
    {
        id: 1,
        name: 'ხაჭაპური აჭარული',
        category: 'starters',
        description: 'ტრადიციული ქართული ხაჭაპური კვერცხით და კარაქით',
        price: '15 ₾',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300'
    },
    {
        id: 2,
        name: 'ოჯახური ხინკალი',
        category: 'main',
        description: '10 ცალი წვნიანი ხინკალი ხორცით',
        price: '18 ₾',
        image: 'https://images.unsplash.com/photo-1624371440800-c70f0e1102e0?w=300'
    },
    {
        id: 3,
        name: 'შოთის პური',
        category: 'starters',
        description: 'ტრადიციული ქართული პური',
        price: '3 ₾',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300'
    },
    {
        id: 4,
        name: 'ჩაქაფული',
        category: 'main',
        description: 'საქონლის ხორცი მწვანილით',
        price: '22 ₾',
        image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=300'
    },
    {
        id: 5,
        name: 'ჩურჩხელა',
        category: 'desserts',
        description: 'ტრადიციული ქართული ტკბილეული',
        price: '5 ₾',
        image: 'https://images.unsplash.com/photo-1605197629167-f1b1c7ab4c4c?w=300'
    },
    {
        id: 6,
        name: 'ნაპოლეონი',
        category: 'desserts',
        description: 'ტრადიციული ნამცხვარი',
        price: '7 ₾',
        image: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=300'
    }
];

// გალერეის მონაცემები
const galleryData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
        title: 'რესტორანი'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
        title: 'კერძები'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
        title: 'ინტერიერი'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1552566624-52f8b3ae5fd5?w=600',
        title: 'შეფ-მზარეული'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600',
        title: 'ღვინო'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600',
        title: 'ტერასა'
    }
];

// ბლოგის მონაცემები
const blogData = [
    {
        id: 1,
        title: 'ქართული სამზარეულოს საიდუმლოებები',
        excerpt: 'აღმოაჩინეთ ტრადიციული ქართული კერძების მომზადების საიდუმლოებები...',
        date: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600'
    },
    {
        id: 2,
        title: 'ღვინის დეგუსტაციის გზამკვლევი',
        excerpt: 'როგორ სწორად დავაგემოვნოთ ღვინო და რას უნდა მივაქციოთ ყურადღება...',
        date: '2024-01-10',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600'
    },
    {
        id: 3,
        title: 'სეზონური პროდუქტები',
        excerpt: 'რა პროდუქტებია საუკეთესო ზამთრის სეზონზე...',
        date: '2024-01-05',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600'
    }
];

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu