import { Property } from '../types/property';

export const PROPERTIES: Property[] = [
  {
    id: 'prop-01',
    title: 'ویلای مدرن آفتاب',
    englishTitle: 'Aftab Modern Villa',
    type: 'villa',
    typeLabel: 'ویلا',
    dealType: 'sale',
    dealTypeLabel: 'خرید',
    location: 'تهران، لواسان، دره عسل',
    city: 'لواسان',
    area: 480,
    bedrooms: 4,
    bathrooms: 5,
    parking: 4,
    price: 38,
    priceFormatted: '۳۸ میلیارد تومان',
    priceSampleNote: 'قیمت نمونه و تخمینی',
    badge: 'ویژه',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'شاهکاری از معماری مینیمال در دل طبیعت لواسان با دید پانورامای کوهستان. ترکیب بتن اکسپوز، شیشه‌های قدی ضد بازتاب و ترمووود فنلاندی. طراحی این ویلا به‌گونه‌ای است که نور طبیعی خورشید در تمام ساعات روز در فضاهای اصلی جریان دارد.',
    architecturalHighlights: [
      'طراحی کنسول‌های معلق بدون ستون میانی',
      'نمای شیشه‌ای یکپارچه با ضخامت دوگانه و عایق صوتی کامل',
      'سیستم سرمایش و گرمایش از کف و تهویه مرکزی هوشمند'
    ],
    features: [
      'استخر اینفینیتی چهارفصل با سیستم تصفیه اوزون',
      'سیستم هوشمند تمام‌اتوماتیک BMS شرکت اشنایدر',
      'روف‌گاردن ۲۰۰ متری مجهز به باربیکیو و فایرباکس',
      'سالن سینمای خانگی با سیستم صوتی فراگیر',
      'سوئیت سرایداری مجزا و پارکینگ اختصاصی برای ۴ خودرو',
      'آب، برق ۳ فاز و ژنراتور اضطراری پرکینز'
    ],
    coordinates: { lat: 35.8248, lng: 51.6321 },
    yearBuilt: 1402,
    views: 'دید ۳۶۰ درجه به کوهستان و باغات لواسان',
    hasVirtualTour: true
  },
  {
    id: 'prop-02',
    title: 'پنت‌هاوس Aurora',
    englishTitle: 'Aurora Penthouse',
    type: 'penthouse',
    typeLabel: 'پنت‌هاوس',
    dealType: 'sale',
    dealTypeLabel: 'خرید',
    location: 'تهران، الهیه، خیابان مریم',
    city: 'الهیه',
    area: 320,
    bedrooms: 3,
    bathrooms: 4,
    parking: 3,
    price: 55,
    priceFormatted: '۵۵ میلیارد تومان',
    priceSampleNote: 'قیمت نمونه و تخمینی',
    badge: 'ویژه',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'پنت‌هاوسی بی‌نظیر در آخرین طبقه برج مجلل الهیه با دید کامل تهران و رشته‌کوه البرز. این واحد دارای ارتفاع سقف ۴.۲ متر، آشپزخانه ایتالیایی Poliform مجهز به تجهیزات Gaggenau و تراس سبز اختصاصی با استخر شیشه‌ای است.',
    architecturalHighlights: [
      'پلان باز بدون هیچ‌گونه ستون مزاحم با نورگیری شمالی و جنوبی',
      'کفپوش سنگ اسلب یکپارچه Calacatta Gold ایتالیا',
      'آسانسور با دسترسی اختصاصی با کد و بیومتریک مستقیم به واحد'
    ],
    features: [
      'آسانسور اختصاصی با کلید هوشمند',
      'تراس گاردن وسیع با جکوزی معلق در ارتفاع',
      'لابی مجلل با خدمات کانسیرژ و لابی‌من ۲۴ ساعته',
      'مجموعه آبی شامل استخر، سونا خشک و بخار، اتاق ماساژ',
      'سالن بدنسازی مجهز به دستگاه‌های Technogym ایتالیا',
      '۳ پارکینگ سندی باکس اختصاصی'
    ],
    coordinates: { lat: 35.7952, lng: 51.4258 },
    yearBuilt: 1403,
    views: 'دید بدون مشرف تهران و کوهستان توچال',
    floor: 'طبقه ۱۶ (آخرین طبقه)',
    hasVirtualTour: true
  },
  {
    id: 'prop-03',
    title: 'ویلای جنگلی مهتاب',
    englishTitle: 'Mahtab Forest Villa',
    type: 'villa',
    typeLabel: 'ویلا',
    dealType: 'sale',
    dealTypeLabel: 'خرید',
    location: 'مازندران، رامسر، اربکله',
    city: 'رامسر',
    area: 620,
    bedrooms: 5,
    bathrooms: 6,
    parking: 5,
    price: 26,
    priceFormatted: '۲۶ میلیارد تومان',
    priceSampleNote: 'قیمت نمونه و تخمینی',
    badge: 'جدید',
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'ترکیب اعجاب‌انگیز چوب طبیعی بلوط، سنگ‌های بومی و بتن در آغوش جنگل‌های هیرکانی اربکله رامسر. سکوت مطلق، هوای پاک و مه صبحگاهی که از میان پنجره‌های قدی به داخل خانه لبخند می‌زند.',
    architecturalHighlights: [
      'معماری پایدار و ارگانیک سازگار با توپوگرافی کوهپایه',
      'سقف شیب‌دار شیشه‌ای با قابلیت رصد ستارگان در شب',
      'عایق‌بندی فوق‌العاده رطوبتی و حرارتی با تکنولوژی روز اروپا'
    ],
    features: [
      'محوطه شخصی ۱۲۰۰ متری مشجر با درختان مرکبات و گردو',
      'جکوزی روباز مشرف به اقیانوس ابر و دریای خزر',
      'شومینه هیزمی معلق معمارانه ساخت فرانسه',
      'سیستم ذخیره آب باران و تصفیه پیشرفته',
      'سوئیت مهمان مستقل با ورودی جداگانه',
      'سند شش‌دانگ تک‌برگ عرصه و اعیان با پایان کار'
    ],
    coordinates: { lat: 36.8833, lng: 50.6583 },
    yearBuilt: 1401,
    views: 'چشم‌انداز همزمان جنگل‌های هیرکانی و خط ساحلی خزر',
    hasVirtualTour: true
  },
  {
    id: 'prop-04',
    title: 'آپارتمان Skyline',
    englishTitle: 'Skyline Residence',
    type: 'apartment',
    typeLabel: 'آپارتمان',
    dealType: 'sale',
    dealTypeLabel: 'خرید',
    location: 'تهران، زعفرانیه، خیابان آصف',
    city: 'زعفرانیه',
    area: 240,
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    price: 29,
    priceFormatted: '۲۹ میلیارد تومان',
    priceSampleNote: 'قیمت نمونه و تخمینی',
    badge: 'جدید',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'واحدی مدرن با نقشه مهندسی بدون پرت در یکی از تاپ‌ترین لوکیشن‌های زعفرانیه. پنجره‌های کرتن‌وال سرتاسری، کلوزت‌روم‌های مستر اختصاصی و دسترسی سریع به شاهراه‌های منطقه یک.',
    architecturalHighlights: [
      'سازه ضد زلزله با استاندارد بین‌المللی ریختر ۹',
      'دیوارهای حائل آکوستیک دوجداره برای حفظ حریم خصوصی کامل',
      'تجهیزات بهداشتی توکار برند Villeroy & Boch آلمان'
    ],
    features: [
      'لابی مبله با ارتفاع سقف ۶ متر و آب‌نمای شیشه‌ای',
      'استخر سرپوشیده با نورپردازی فیبر نوری کهکشانی',
      'سالن اجتماعات و همایش مجهز به سیستم پذیرایی',
      'سیستم اعلام و اطفای حریق هوشمند آدرس‌پذیر',
      'اینترنت فیبر نوری پرسرعت اختصاصی',
      '۲ پارکینگ سندی در طبقه منفی یک'
    ],
    coordinates: { lat: 35.8115, lng: 51.4172 },
    yearBuilt: 1403,
    views: 'دید شمالی به کوه و دید جنوبی به محوطه سرسبز برج',
    floor: 'طبقه هشتم',
    hasVirtualTour: false
  },
  {
    id: 'prop-05',
    title: 'ویلای ساحلی Horizon',
    englishTitle: 'Horizon Coastal Villa',
    type: 'villa',
    typeLabel: 'ویلا',
    dealType: 'sale',
    dealTypeLabel: 'خرید',
    location: 'هرمزگان، جزیره کیش، منطقه ساحلی دامون',
    city: 'کیش',
    area: 550,
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    price: 42,
    priceFormatted: '۴۲ میلیارد تومان',
    priceSampleNote: 'قیمت نمونه و تخمینی',
    badge: 'منحصر‌به‌فرد',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'زندگی با امواج نیلگون خلیج فارس در کیش. ویلایی فوق‌مدرن با پله‌های مارپیچ بتنی، استخر اینفینیتی که با خط افق دریا پیوند خورده و دسترسی مستقیم به ساحل شنی اختصاصی.',
    architecturalHighlights: [
      'شیشه‌های هوشمند الکتروکرومیک با قابلیت تنظیم ماتی و کنترل گرما',
      'متریال مقاوم در برابر نمک دریا، شرجی و شرایط خاص اقلیمی کیش',
      'معماری نیمه‌باز با چرخش هوای خنک دریایی در سراسر سالن‌ها'
    ],
    features: [
      'دسترسی مستقیم و اختصاصی به ساحل با گیت امنیتی',
      'استخر بی‌نهایت متصل به دید خط افق خلیج فارس',
      'اسکله اختصاصی کوچک مناسب جت‌اسکی و قایق تفریحی',
      'سیستم پیشرفته آب‌شیرین‌کن اسمز معکوس صنعتی',
      'سیستم صوتی محیطی ضد آب ضد رطوبت در تراس‌ها',
      'سیستم سرمایش VRF ژاپنی Daikin'
    ],
    coordinates: { lat: 26.5418, lng: 54.0189 },
    yearBuilt: 1402,
    views: 'چشم‌انداز پانورامیک ابدی خلیج فارس و غروب‌های طلایی کیش',
    hasVirtualTour: true
  },
  {
    id: 'prop-06',
    title: 'خانه مدرن Garden',
    englishTitle: 'Garden Modern House',
    type: 'villa',
    typeLabel: 'ویلا',
    dealType: 'sale',
    dealTypeLabel: 'خرید',
    location: 'تهران، فرمانیه، خیابان سنبل',
    city: 'فرمانیه',
    area: 380,
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    price: 35,
    priceFormatted: '۳۵ میلیارد تومان',
    priceSampleNote: 'قیمت نمونه و تخمینی',
    badge: 'ویژه',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'ترکیب هنر معماری و طبیعت در قلب فرمانیه. این عمارت شهری با دیوارهای سبز زنده (Green Wall)، آتریوم مرکزی دوطبقه و نورگیر سقفی بزرگ، طراوت باغ را به فضاهای نشیمن آورده است.',
    architecturalHighlights: [
      'آتریوم شیشه‌ای در مرکز پلان با درخت زیتون کهنسال و باغچه ژاپنی',
      'نورگیری طبیعی ۳۶۰ درجه با سقف‌های دکوراتیو هندسی',
      'عایق‌بندی پیشرفته حرارتی با کاهش ۴۰ درصدی مصرف انرژی'
    ],
    features: [
      'حیاط اختصاصی فضاسازی‌شده به سبک ذن با آبنما و برکه ماهی',
      'مستر بدروم با بالکن رو به باغچه عمودی',
      'سیستم هوشمند روشنایی با سنسورهای حرکتی و سناریوهای متعدد',
      'آشپزخانه کثیف (مطبخ) مجهز و لاندری اختصاصی',
      'آسانسور هیدرولیک شیشه‌ای بین طبقات',
      'اتاق ورزش و سونا خشک فنلاندی'
    ],
    coordinates: { lat: 35.8012, lng: 51.4689 },
    yearBuilt: 1403,
    views: 'دید به باغ مشجر اختصاصی و حیاط مرکزی سبز',
    hasVirtualTour: true
  },
  {
    id: 'prop-07',
    title: 'پنت‌هاوس Infinity',
    englishTitle: 'Infinity Penthouse',
    type: 'penthouse',
    typeLabel: 'پنت‌هاوس',
    dealType: 'sale',
    dealTypeLabel: 'خرید',
    location: 'تهران، فرشته، خیابان چناران',
    city: 'فرشته',
    area: 430,
    bedrooms: 4,
    bathrooms: 5,
    parking: 4,
    price: 62,
    priceFormatted: '۶۲ میلیارد تومان',
    priceSampleNote: 'قیمت نمونه و تخمینی',
    badge: 'منحصر‌به‌فرد',
    heroImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'بالاترین قله تجمل معماری در خیابان فرشته. پنت‌هاوس دوپلکس با دیزاین اختصاصی استودیوی میلان، استخر شیشه‌ای کنسول‌شده در لبه طبقه بیست‌ودوم با دید بی‌انتهای پایتخت.',
    architecturalHighlights: [
      'طراحی پلکان شناور از سنگ مرمر و شیشه نشکن لمینت کریستال',
      'استخر شیشه‌ای معلق با دید به فضای پایین برج',
      'پنجره‌های تمام‌قد بدون فریم با روکش بازتاب‌دهنده اشعه فرابنفش'
    ],
    features: [
      'هلی‌پد استاندارد در بام برج برای پروازهای اختصاصی',
      'آسانسور خودرو اختصاصی با امکان پارک سوپراسپرت در سالن پذیرایی',
      'سالن سینما و تئاتر اختصاصی با صندلی‌های ارگونومیک چرمی',
      'اتاق ویژه نگهداری نوشیدنی و گاوصندوق ضد حریق بیومتریک',
      '۴ پارکینگ سندی بزرگ در بهترین موقعیت منفی برج',
      'تیم نگهبانی و امنیت فیزیکی مسلح ۲۴ ساعته'
    ],
    coordinates: { lat: 35.7981, lng: 51.4215 },
    yearBuilt: 1403,
    views: 'دید سراسری و بی‌نهایت ۳۶۰ درجه به تمام تهران و قله دماوند',
    floor: 'طبقه ۲۲ (دوپلکس)',
    hasVirtualTour: true
  },
  {
    id: 'prop-08',
    title: 'ویلای Forest',
    englishTitle: 'Forest Sanctuary Villa',
    type: 'villa',
    typeLabel: 'ویلا',
    dealType: 'sale',
    dealTypeLabel: 'خرید',
    location: 'مازندران، نوشهر، منطقه جنگلی چلندر',
    city: 'نوشهر',
    area: 700,
    bedrooms: 5,
    bathrooms: 6,
    parking: 6,
    price: 31,
    priceFormatted: '۳۱ میلیارد تومان',
    priceSampleNote: 'قیمت نمونه و تخمینی',
    badge: 'ویژه',
    heroImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'پناهگاهی مدرن در میان انبوه درختان کهنسال جنگل‌های شمالی نوشهر. همجواری با رودخانه طبیعی با صدای دلنشین آب، تراس‌های چوبی وسیع و محوطه‌سازی به سبک مدرن نوردیک.',
    architecturalHighlights: [
      'استفاده هوشمندانه از ستون‌های فلزی مخفی برای ایجاد بازشوهای عریض',
      'سیستم جمع‌آوری و فیلتراسیون هوشمند آب کوهستان',
      'پوشش چوبی ضد رطوبت Yakisugi ژاپنی (چوب سوخته مقاوم)'
    ],
    features: [
      'رودخانه طبیعی و زلال در امتداد مرز شرقی زمین ملک',
      'استخر روباز با آب گرم طبیعی و سیستم گرمایش خورشیدی',
      'کلبه درختی لوکس اختصاصی برای مطالعه و ریلکسیشن',
      'زمین تنیس استاندارد با چمن مصنوعی و نورپردازی شبانه',
      'ساختمان سرایداری و نگهبانی مستقل ۲۴ ساعته',
      'سند شش‌دانگ ملکی ثبتی بدون هیچ‌گونه معارض منابع طبیعی'
    ],
    coordinates: { lat: 36.6342, lng: 51.6219 },
    yearBuilt: 1402,
    views: 'دید فراگیر جنگل بارانی، کوهپایه‌های البرز و حریم رودخانه',
    hasVirtualTour: true
  }
];

export const PROPERTY_TYPES = [
  { value: 'all', label: 'همه دسته‌ها' },
  { value: 'villa', label: 'ویلا' },
  { value: 'penthouse', label: 'پنت‌هاوس' },
  { value: 'apartment', label: 'آپارتمان' },
  { value: 'commercial', label: 'ملک تجاری / اداری' }
];

export const DEAL_TYPES = [
  { value: 'all', label: 'همه معاملات' },
  { value: 'sale', label: 'خرید و فروش' },
  { value: 'rent', label: 'اجاره لوکس' },
  { value: 'mortgage', label: 'رهن کامل' }
];

export const LOCATIONS = [
  'همه مناطق',
  'لواسان',
  'الهیه',
  'زعفرانیه',
  'فرشته',
  'فرمانیه',
  'رامسر',
  'کیش',
  'نوشهر'
];
