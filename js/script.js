const translations = {
    ar: {
        logo_text: "العدالة",
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "خدماتنا",
        nav_contact: "تواصل معنا",
        hero_title: "شريكك القانوني الموثوق في مصر",
        hero_subtitle: "نقدم حلولاً قانونية مبتكرة وشاملة لحماية حقوقك ومصالحك بأعلى معايير الاحترافية.",
        btn_consultation: "طلب استشارة مجانية",
        btn_services: "استكشف خدماتنا",
        about_title: "من نحن",
        about_desc: "نحن مكتب محاماة مصري رائد يضم نخبة من المحامين والمستشارين القانونيين ذوي الخبرة العالية. نلتزم بتقديم أفضل الخدمات القانونية لعملائنا، سواء كانوا أفراداً أو شركات، مع التركيز على الدقة والسرعة والنزاهة.",
        feature_1: "خبرة قانونية واسعة",
        feature_2: "فريق عمل متخصص",
        feature_3: "سرية تامة للعملاء",
        stat_years: "سنة خبرة",
        stat_cases: "قضية ناجحة",
        stat_lawyers: "محامي ومستشار",
        services_title: "خدماتنا",
        services_subtitle: "نغطي كافة المجالات القانونية لتلبية احتياجاتكم",
        service_1_title: "القضايا الجنائية",
        service_1_desc: "دفاع قوي وتمثيل قانوني في كافة مراحل التقاضي الجنائي.",
        service_2_title: "تأسيس الشركات",
        service_2_desc: "إجراءات التأسيس، العقود التجارية، والاستشارات القانونية للشركات.",
        service_3_title: "قضايا الأسرة",
        service_3_desc: "الطلاق، النفقة، الحضانة، والميراث بكل سرية وخصوصية.",
        service_4_title: "العقود والاتفاقيات",
        service_4_desc: "صياغة ومراجعة كافة أنواع العقود لضمان حقوقكم القانونية.",
        service_5_title: "الضرائب والبنوك",
        service_5_desc: "استشارات ضريبية ومنازعات بنكية وتمويلية.",
        service_6_title: "العقارات",
        service_6_desc: "تسجيل العقارات، عقود البيع والشراء، والمنازعات العقارية.",
        contact_title: "تواصل معنا",
        contact_info_title: "معلومات الاتصال",
        address_label: "العنوان",
        address_val: "١٢٣ شارع التحرير، الدقي، الجيزة، مصر",
        phone_label: "الهاتف",
        email_label: "البريد الإلكتروني",
        form_name: "الاسم الكامل",
        form_email: "البريد الإلكتروني",
        form_phone: "رقم الهاتف",
        form_message: "الرسالة",
        form_submit: "إرسال الرسالة",
        copyright: "© 2023 مكتب العدالة للمحاماة. جميع الحقوق محفوظة."
    },
    en: {
        logo_text: "Al-Adala",
        nav_home: "Home",
        nav_about: "About Us",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_title: "Your Trusted Legal Partner in Egypt",
        hero_subtitle: "We provide innovative and comprehensive legal solutions to protect your rights and interests with the highest standards of professionalism.",
        btn_consultation: "Free Consultation",
        btn_services: "Explore Services",
        about_title: "About Us",
        about_desc: "We are a leading Egyptian law firm comprising a team of highly experienced lawyers and legal consultants. We are committed to providing the best legal services to our clients, whether individuals or companies, focusing on accuracy, speed, and integrity.",
        feature_1: "Extensive Legal Experience",
        feature_2: "Specialized Team",
        feature_3: "Complete Client Confidentiality",
        stat_years: "Years Experience",
        stat_cases: "Successful Cases",
        stat_lawyers: "Lawyers & Consultants",
        services_title: "Our Services",
        services_subtitle: "We cover all legal fields to meet your needs",
        service_1_title: "Criminal Cases",
        service_1_desc: "Strong defense and legal representation in all stages of criminal litigation.",
        service_2_title: "Corporate Formation",
        service_2_desc: "Incorporation procedures, commercial contracts, and legal advice for companies.",
        service_3_title: "Family Law",
        service_3_desc: "Divorce, alimony, custody, and inheritance with complete confidentiality and privacy.",
        service_4_title: "Contracts & Agreements",
        service_4_desc: "Drafting and reviewing all types of contracts to ensure your legal rights.",
        service_5_title: "Tax & Banking",
        service_5_desc: "Tax consultations and banking/financial disputes.",
        service_6_title: "Real Estate",
        service_6_desc: "Real estate registration, sales and purchase contracts, and property disputes.",
        contact_title: "Contact Us",
        contact_info_title: "Contact Information",
        address_label: "Address",
        address_val: "123 El Tahrir St, Dokki, Giza, Egypt",
        phone_label: "Phone",
        email_label: "Email",
        form_name: "Full Name",
        form_email: "Email Address",
        form_phone: "Phone Number",
        form_message: "Message",
        form_submit: "Send Message",
        copyright: "© 2023 Al-Adala Law Firm. All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contactForm');
    
    // Language Toggle Logic
    let currentLang = 'ar';

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        updateLanguage(currentLang);
    });

    function updateLanguage(lang) {
        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update Button Text
        langToggleBtn.textContent = lang === 'ar' ? 'English' : 'العربية';

        // Update Text Content
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // Contact Form Submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const message = currentLang === 'ar' 
            ? `شكراً لك ${name}، تم استلام رسالتك بنجاح وسنتواصل معك قريباً.`
            : `Thank you ${name}, your message has been received successfully and we will contact you soon.`;
        
        alert(message);
        contactForm.reset();
    });
});
