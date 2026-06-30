// Bu dosya otomatik oluşturulmuştur (100+ SSS verisi).
// Yeni soru eklemek için ilgili kategori dizisine { soru, cevap } objesi ekleyin.

export interface SSSItem {
  soru: string;
  cevap: string;
}

export interface SSSKategori {
  kategori: string;
  icon: string;
  sorular: SSSItem[];
}

export const sssKategorileri: SSSKategori[] = [
  {
    "kategori": "Genel Sorular",
    "icon": "💬",
    "sorular": [
      {
        "soru": "Vinç Deposu kimdir, ne hizmeti verir?",
        "cevap": "Vinç Deposu (Express Vinç Hizmetleri ve Nak. Ltd. Şti.), İstanbul merkezli olarak vinç, manlift, forklift ve telehandler kiralama hizmeti veren, 25 yılı aşkın sektör tecrübesine sahip bir firmadır."
      },
      {
        "soru": "Hangi bölgelere hizmet veriyorsunuz?",
        "cevap": "İstanbul'un tüm 39 ilçesinde hizmet veriyoruz. Talep halinde Trakya, Marmara bölgesi ve çevre illere de hizmet sağlanmaktadır; şehir dışı için ayrıca nakliye bedeli hesaplanır."
      },
      {
        "soru": "7/24 hizmet veriyor musunuz?",
        "cevap": "Evet. Acil durum ve teknik destek hattımız 7/24 açıktır. Standart mesai saatlerimiz hafta içi 08:00–18:00, cumartesi 09:00–15:00'tir."
      },
      {
        "soru": "Kiralık vinç ve kiralık manlift arasındaki fark nedir?",
        "cevap": "Vinç, ağır yük kaldırma ve taşıma için kullanılır; manlift ise personeli güvenli şekilde yüksekteki bir noktaya taşımak için tasarlanmıştır. İhtiyacınız yük taşımaysa vinç, personel erişimiyse manlift uygundur."
      },
      {
        "soru": "Nasıl teklif alabilirim?",
        "cevap": "0532 303 90 89 numaralı hattımızı arayabilir, WhatsApp üzerinden yazabilir veya site üzerindeki iletişim formunu doldurabilirsiniz. Proje bilgilerinizi aldıktan sonra size özel teklif hazırlarız."
      },
      {
        "soru": "Teklif almak ücretli mi?",
        "cevap": "Hayır, teklif ve keşif süreci tamamen ücretsizdir."
      },
      {
        "soru": "Aynı gün kiralama mümkün mü?",
        "cevap": "Stok durumuna ve bölgenize bağlı olarak çoğu talepte aynı gün veya ertesi gün teslimat sağlayabiliyoruz. Acil talepler için lütfen telefonla iletişime geçin."
      },
      {
        "soru": "Firmanızın kaç yıllık tecrübesi var?",
        "cevap": "Sektörde 25 yılı aşkın tecrübeye sahibiz ve 1000'den fazla projeyi başarıyla tamamladık."
      },
      {
        "soru": "Hangi sektörlere hizmet veriyorsunuz?",
        "cevap": "İnşaat, sanayi, enerji, liman/lojistik, telekomünikasyon, peyzaj ve dini yapı restorasyonu (cami/minare) dahil birçok sektöre hizmet veriyoruz."
      },
      {
        "soru": "Web sitenizde olmayan bir ekipman ihtiyacım var, ne yapmalıyım?",
        "cevap": "Bizi arayarak ihtiyacınızı detaylandırabilirsiniz; geniş iş ortağı ağımız sayesinde sitede listelenmeyen özel ekipman taleplerine de çözüm üretebiliyoruz."
      }
    ]
  },
  {
    "kategori": "Fiyatlandırma ve Ödeme",
    "icon": "💰",
    "sorular": [
      {
        "soru": "Kiralık vinç fiyatları nelere göre değişir?",
        "cevap": "Vinç tipi ve kapasitesi, çalışma yüksekliği, kiralama süresi, çalışma lokasyonu, operatör ihtiyacı ve nakliye mesafesi fiyatı belirleyen temel etkenlerdir."
      },
      {
        "soru": "Fiyata neler dahildir?",
        "cevap": "Standart fiyatlarımıza vinç/ekipman, sertifikalı operatör ve sigorta dahildir. Şehir dışı nakliye, gece çalışması ve özel izin bedelleri ayrıca hesaplanır."
      },
      {
        "soru": "Saatlik kiralama yapıyor musunuz?",
        "cevap": "Evet, özellikle sepetli vinç ve manlift hizmetlerinde saatlik kiralama seçeneğimiz mevcuttur. Minimum kiralama süresi ekipman tipine göre değişir."
      },
      {
        "soru": "Aylık kiralamada indirim var mı?",
        "cevap": "Evet. Aylık ve üzeri kiralama anlaşmalarında günlük fiyata kıyasla genellikle %20–35 arasında indirim uygulanmaktadır."
      },
      {
        "soru": "Fiyatlara KDV dahil mi?",
        "cevap": "Belirtilen fiyatlar KDV hariçtir. Kesin ve KDV dahil tutar, teklif aşamasında size yazılı olarak iletilir."
      },
      {
        "soru": "Ödeme yöntemleri nelerdir?",
        "cevap": "Nakit, banka havalesi/EFT ve firma hesaplarına ödeme kabul edilmektedir. Kurumsal müşteriler için fatura karşılığı ödeme planı oluşturulabilir."
      },
      {
        "soru": "Depozito veya ön ödeme isteniyor mu?",
        "cevap": "Kiralama süresine ve ekipman tipine göre değişmekle birlikte, çoğu standart kiralamada ön ödeme talep edilmez; uzun dönem ve yüksek değerli ekipmanlarda sözleşme öncesi belirli bir ön ödeme istenebilir."
      },
      {
        "soru": "Minimum kiralama süresi var mı?",
        "cevap": "Sepetli vinçte minimum yarım gün (4 saat), mobil ve kule vinçte minimum 1 tam gün uygulanmaktadır."
      },
      {
        "soru": "Fiyat teklifi ne kadar sürede hazırlanır?",
        "cevap": "Standart talepler için teklif genellikle aynı gün içinde, karmaşık projeler için ise 24 saat içinde hazırlanır."
      },
      {
        "soru": "Uzun dönem kiralamada fiyat sabitleniyor mu?",
        "cevap": "Sözleşme süresi boyunca anlaşılan fiyat sabit kalır; piyasa koşullarına bağlı güncellemeler ancak sözleşme yenileme döneminde söz konusu olabilir."
      }
    ]
  },
  {
    "kategori": "Vinç Türleri ve Seçimi",
    "icon": "🏗️",
    "sorular": [
      {
        "soru": "Hangi vinç türlerini kiralıyorsunuz?",
        "cevap": "Mobil vinç, sepetli vinç, kule vinç, paletli vinç, ahtapot vinç, kamyon üstü vinç, raylı vinç, portal vinç, monoray vinç, sabit vinç ve minik vinç dahil geniş bir ekipman parkımız bulunmaktadır."
      },
      {
        "soru": "Doğru vinç tipini nasıl seçerim?",
        "cevap": "Yük ağırlığı, çalışma yüksekliği, çalışma alanının genişliği, zemin durumu ve kiralama süresi göz önüne alınarak en uygun vinç tipi belirlenir. Uzmanlarımız bu süreçte size ücretsiz destek sağlar."
      },
      {
        "soru": "Mobil vinç ne için kullanılır?",
        "cevap": "Mobil vinç, tekerlekli şasisi sayesinde hızlı kurulum gerektiren ve farklı lokasyonlar arasında taşınması gereken inşaat, sanayi ve enerji projelerinde kullanılır."
      },
      {
        "soru": "Sepetli vinç hangi işlerde tercih edilir?",
        "cevap": "Sepetli vinç; cephe bakımı, cam temizliği, aydınlatma montajı, anten kurulumu ve personel erişimi gerektiren yüksek nokta çalışmalarında tercih edilir."
      },
      {
        "soru": "Kule vinç ne zaman tercih edilmeli?",
        "cevap": "Kule vinç, aylarca sürecek yüksek katlı inşaat projelerinde, sabit bir noktadan yüksek irtifada düzenli yük taşıma ihtiyacı olduğunda ekonomik bir çözümdür."
      },
      {
        "soru": "Paletli vinç hangi koşullarda kullanılır?",
        "cevap": "Paletli vinç, zorlu ve yumuşak arazi koşullarında, çok yüksek kapasiteli kaldırma gerektiren ağır sanayi ve enerji projelerinde (rüzgar türbini montajı gibi) kullanılır."
      },
      {
        "soru": "Ahtapot vinç nedir, ne işe yarar?",
        "cevap": "Ahtapot vinç, kompakt yapısı ve çok yönlü manevra kabiliyeti sayesinde dar sokaklarda, bina içinde ve kapalı mekanlarda çalışabilen bir vinç türüdür."
      },
      {
        "soru": "Dar sokaklarda hangi vinç kullanılır?",
        "cevap": "Dar sokak ve kısıtlı alanlarda ahtapot vinç veya kompakt sepetli vinç modelleri en uygun çözümü sunar."
      },
      {
        "soru": "Vinç kapasitesi nasıl hesaplanır?",
        "cevap": "Vinç kapasitesi, kaldırılacak yükün ağırlığı ile bumun erişeceği mesafenin çarpımına göre ton-metre olarak hesaplanır. Bum uzadıkça vincin taşıyabileceği yük miktarı azalır."
      },
      {
        "soru": "Sepetli vinçte erişim yüksekliği ne kadar olabilir?",
        "cevap": "Filomuzda 12 metreden 90 metreye kadar farklı erişim yüksekliğine sahip sepetli vinç modelleri bulunmaktadır."
      },
      {
        "soru": "Helikopter vinç ne için kullanılır?",
        "cevap": "Helikopter vinç, kara araçlarıyla erişilmesi mümkün olmayan, çok yüksek veya uzak noktalara yük taşıma ve montaj işlemleri için özel projelerde kullanılan bir hava taşıma çözümüdür."
      },
      {
        "soru": "Kamyon üstü vinç hangi işler için uygundur?",
        "cevap": "Kamyon üstü vinç, yük taşıma ve indirme işlemini araç üzerinden gerçekleştirdiği için lojistik, depo ve şantiye malzeme teslimatlarında pratik bir çözümdür."
      },
      {
        "soru": "Raylı ve portal vinç ne işe yarar?",
        "cevap": "Raylı ve portal vinçler genellikle fabrika, depo ve üretim tesislerinde sabit bir hat üzerinde tekrarlı yük taşıma operasyonlarında kullanılan endüstriyel çözümlerdir."
      },
      {
        "soru": "Birden fazla vinç türüne aynı projede ihtiyacım olursa ne olur?",
        "cevap": "Büyük ölçekli projelerde farklı vinç tiplerini aynı anda saha bazlı koordinasyonla kiralayabiliyoruz; proje yöneticimiz tüm ekipman planlamasını sizin için organize eder."
      }
    ]
  },
  {
    "kategori": "Manlift ve Platform Türleri",
    "icon": "🦾",
    "sorular": [
      {
        "soru": "Manlift nedir?",
        "cevap": "Manlift, yüksek noktalarda güvenli personel erişimi sağlamak amacıyla kullanılan, belirli süre için kiralanabilen profesyonel bir yükseltme platformudur."
      },
      {
        "soru": "Hangi manlift/platform türlerini kiralıyorsunuz?",
        "cevap": "Makaslı platform, eklemli platform, örümcek platform ve sepetli platform (araç üstü) olmak üzere dört ana platform türünü kiralıyoruz."
      },
      {
        "soru": "Makaslı platform ne zaman tercih edilir?",
        "cevap": "Makaslı platform; düz ve sağlam zeminlerde, geniş çalışma alanı ve aynı anda birden fazla kişinin çalışabileceği iç mekan montaj işlerinde tercih edilir."
      },
      {
        "soru": "Eklemli platform ne işe yarar?",
        "cevap": "Eklemli (mafsallı) platform, engellerin üzerinden geçerek dar ve zor erişimli noktalara ulaşabildiği için cephe, çelik konstrüksiyon ve bakım-onarım işlerinde idealdir."
      },
      {
        "soru": "Örümcek platform hangi durumlarda tercih edilir?",
        "cevap": "Örümcek platform; hafif yapısı ve esnek ayak sistemi sayesinde hassas zeminlere zarar vermeden, iç mekan ve dış mekan karışık projelerde tercih edilir."
      },
      {
        "soru": "Manlift kiralarken nelere dikkat etmeliyim?",
        "cevap": "Çalışma yüksekliği, alan tipi (kapalı/açık), zemin durumu, sigorta kapsamı ve sözleşme şartları dikkatle incelenmelidir."
      },
      {
        "soru": "Manlift kapalı alanda kullanılabilir mi?",
        "cevap": "Evet, kapalı mekanlar için emisyonsuz elektrikli manlift modellerimiz mevcuttur. Açık şantiye alanlarında dizel motorlu modeller daha uygundur."
      },
      {
        "soru": "Manlift maksimum kaç metreye çıkabiliyor?",
        "cevap": "Filomuzdaki eklemli platformlar 40 metreye kadar, sepetli platformlar ise projeye göre daha yüksek erişim seviyelerine ulaşabilmektedir."
      },
      {
        "soru": "Manlift operatörü dahil mi?",
        "cevap": "Operatör hizmeti standart pakete dahil değildir ancak talebiniz halinde sertifikalı operatörümüzle birlikte kiralama sağlanır; ek ücret 500–5.000 TL arasında değişir."
      },
      {
        "soru": "Manlift bakımları kim tarafından yapılır?",
        "cevap": "Tüm bakım ve onarım işlemleri firmamız tarafından üstlenilir; siz sadece güvenle çalışırsınız."
      }
    ]
  },
  {
    "kategori": "Operatör ve Sertifikasyon",
    "icon": "👷",
    "sorular": [
      {
        "soru": "Operatörlü kiralama ne anlama gelir?",
        "cevap": "Operatörlü kiralama, sertifikalı ve deneyimli bir vinç/manlift operatörünün ekipmanı sizin için kullandığı hizmet modelidir; hem güvenli hem de verimli çalışma sağlar."
      },
      {
        "soru": "Operatörsüz vinç kiralayabilir miyim?",
        "cevap": "Teknik olarak mümkün olsa da yasal düzenlemeler gereği belgeli operatör zorunludur. Operatörsüz kullanım iş güvenliği ihlali oluşturur ve yaptırım gerektirir."
      },
      {
        "soru": "Operatörleriniz sertifikalı mı?",
        "cevap": "Evet, tüm operatörlerimiz MEB onaylı operatörlük belgesine ve güncel ISG eğitim sertifikalarına sahiptir."
      },
      {
        "soru": "Operatör ücreti fiyata dahil mi?",
        "cevap": "Standart kiralama paketlerimizde operatör ücreti fiyata dahildir; bazı özel projelerde ek operatör/vardiya talebi ayrıca ücretlendirilir."
      },
      {
        "soru": "Operatör değişikliği talep edebilir miyim?",
        "cevap": "Evet, performans veya uyum sorunu yaşanması halinde operatör değişikliği talebinizi değerlendirip en kısa sürede çözüm sunarız."
      },
      {
        "soru": "Gece çalışmasında operatör desteği var mı?",
        "cevap": "Evet, gece çalışması gerektiren projelerde de sertifikalı operatör desteği sağlanır; gece mesaisi için ayrıca ücretlendirme yapılır."
      },
      {
        "soru": "Kendi operatörümüzle çalışabilir miyiz?",
        "cevap": "Sözleşme şartlarımız çerçevesinde değerlendirilebilir; ancak ekipmanın garantisi ve sigorta kapsamının korunması için firmamızın sertifikalı operatörlerini önermekteyiz."
      },
      {
        "soru": "Operatörler ISG eğitimi alıyor mu?",
        "cevap": "Evet, tüm operatörlerimiz düzenli olarak iş sağlığı ve güvenliği (ISG) yenileme eğitimlerine katılmaktadır."
      },
      {
        "soru": "Birden fazla vardiya operatör desteği sağlıyor musunuz?",
        "cevap": "Evet, 7/24 veya çok vardiyalı projeler için yeterli sayıda sertifikalı operatör planlaması yapılabilir."
      },
      {
        "soru": "Operatörün iş kazası sorumluluğu kime aittir?",
        "cevap": "Operatörlerimiz sigortalı çalışanlarımızdır; iş güvenliği prosedürlerine uygun çalışma sorumluluğu firmamıza aittir. Sözleşmede sorumluluk maddeleri açıkça belirtilir."
      }
    ]
  },
  {
    "kategori": "Güvenlik ve Sigorta",
    "icon": "🛡️",
    "sorular": [
      {
        "soru": "Ekipmanlarınız sigortalı mı?",
        "cevap": "Evet, tüm ekipmanlarımız ve operasyonlarımız kapsamlı sigorta güvencesi altındadır."
      },
      {
        "soru": "Kiralama sırasında bir kaza olursa ne olur?",
        "cevap": "Tüm operasyonlarımız sigorta kapsamında olduğu için olası bir kaza durumunda gerekli işlemler sigorta poliçesi çerçevesinde yürütülür. Saha güvenlik protokollerimiz bu riski en aza indirir."
      },
      {
        "soru": "Kötü hava koşullarında çalışma durduruluyor mu?",
        "cevap": "Evet. Rüzgar hızı, yağmur ve buzlanma durumunda güvenlik gereği çalışma durdurulur. Bu süreler için ücret faturalanmaz."
      },
      {
        "soru": "Yük kapasitesi aşılırsa ne olur?",
        "cevap": "Yük kapasitesi hiçbir koşulda aşılmaz; bu durum hem ekipman hem can güvenliği için kesin bir kuraldır ve operatörlerimiz bu sınırı titizlikle uygular."
      },
      {
        "soru": "Çalışma alanında güvenlik önlemi alınıyor mu?",
        "cevap": "Evet, çalışma alanında gerekli uyarı işaretleri, bariyerler konulur ve saha ekibimiz güvenlik kontrolünü operasyon süresince sürdürür."
      },
      {
        "soru": "Ekipmanlarınız periyodik kontrolden geçiyor mu?",
        "cevap": "Evet, tüm vinç ve manliftlerimiz düzenli bakım ve periyodik muayeneden geçmektedir; bakım kayıtları arşivlenmektedir."
      },
      {
        "soru": "Kiraladığım ekipman arızalanırsa ne olur?",
        "cevap": "Arıza durumunda yedek ekipman veya saha tamir ekibi en hızlı şekilde yönlendirilir; arıza süresi için ücret alınmaz."
      },
      {
        "soru": "Üçüncü şahıslara verilecek zararlar sigorta kapsamında mı?",
        "cevap": "Evet, operasyonlarımız üçüncü şahıs sorumluluk sigortası kapsamında değerlendirilir; detaylar sözleşmede belirtilir."
      },
      {
        "soru": "Yüksekte çalışma güvenliği nasıl sağlanıyor?",
        "cevap": "Personel emniyet kemeri, sepet/platform kilitleme sistemleri ve düzenli ekipman kontrolleriyle yüksekte çalışma güvenliği sağlanır."
      },
      {
        "soru": "İş güvenliği uzmanınız var mı?",
        "cevap": "Evet, saha operasyonlarımız iş güvenliği prosedürlerine uygun şekilde planlanır ve gerektiğinde İSG uzmanı desteğiyle yürütülür."
      }
    ]
  },
  {
    "kategori": "Kiralama Süreci ve Sözleşme",
    "icon": "📋",
    "sorular": [
      {
        "soru": "Kiralama süreci nasıl işliyor?",
        "cevap": "Talebinizi iletirsiniz, ihtiyaç analizi yapılır, fiyat teklifi sunulur, sözleşme imzalanır, ekipman sahaya teslim edilir ve iş bitiminde teslim alınır."
      },
      {
        "soru": "Sözleşme imzalamak zorunlu mu?",
        "cevap": "Evet, her kiralama işlemi için tarafların hak ve yükümlülüklerini koruyan yazılı bir sözleşme imzalanır."
      },
      {
        "soru": "Sözleşmeyi erken sonlandırabilir miyim?",
        "cevap": "Sözleşme şartlarına bağlı olarak erken sonlandırma mümkündür; olası iade/kesinti koşulları sözleşmede önceden belirtilir."
      },
      {
        "soru": "Kiralama süresini uzatabilir miyim?",
        "cevap": "Evet, devam eden bir kiralamayı uzatmak için önceden bizimle iletişime geçmeniz yeterlidir; ekipman müsaitliğine göre süre uzatımı sağlanır."
      },
      {
        "soru": "Teslimat ne kadar sürede yapılır?",
        "cevap": "Standart taleplerde teslimat genellikle 24 saat içinde, acil taleplerde ise aynı gün içinde gerçekleştirilir."
      },
      {
        "soru": "Ekipman şantiyeye nasıl ulaştırılıyor?",
        "cevap": "Ekipman, kendi sevkiyat ekibimiz ve uygun nakliye araçlarımızla güvenli şekilde şantiyenize teslim edilir ve kurulumu yapılır."
      },
      {
        "soru": "Kiralama bitiminde ne yapmam gerekiyor?",
        "cevap": "İş tamamlandığında bizi bilgilendirmeniz yeterlidir; ekibimiz ekipmanı teslim alır ve çalışma alanını kontrol eder."
      },
      {
        "soru": "Fatura kesiyor musunuz?",
        "cevap": "Evet, tüm kiralama işlemlerimiz için usulüne uygun fatura kesilmektedir."
      },
      {
        "soru": "Kurumsal müşteriler için özel anlaşma yapılıyor mu?",
        "cevap": "Evet, düzenli veya yüksek hacimli kiralama ihtiyacı olan kurumsal müşterilerimiz için özel fiyatlandırma ve çerçeve sözleşme seçenekleri sunuyoruz."
      },
      {
        "soru": "Talep ettiğim ekipman stokta yoksa ne olur?",
        "cevap": "İş ortağı ağımız sayesinde stokta olmayan ekipmanlar için alternatif çözüm üretir veya en yakın müsait tarihi sizinle paylaşırız."
      }
    ]
  },
  {
    "kategori": "Bölgeler ve Lojistik",
    "icon": "📍",
    "sorular": [
      {
        "soru": "İstanbul'un her ilçesine hizmet veriyor musunuz?",
        "cevap": "Evet, Avrupa ve Anadolu yakasındaki tüm 39 ilçeye hizmet veriyoruz."
      },
      {
        "soru": "Boğaz'ın her iki yakasına da aynı gün ulaşabiliyor musunuz?",
        "cevap": "Evet, araç filomuz stratejik noktalara dağılmış olduğu için Avrupa ve Anadolu yakasına aynı gün hizmet sağlayabiliyoruz."
      },
      {
        "soru": "İstanbul dışına da hizmet veriyor musunuz?",
        "cevap": "Trakya, Marmara bölgesi ve çevre illere hizmet verilmektedir; şehir dışı nakliye bedeli ayrıca hesaplanır."
      },
      {
        "soru": "Dar sokaklarda ekipman ulaşımı nasıl sağlanıyor?",
        "cevap": "Trafiğe ve sokak genişliğine hakim ekibimiz, sevkiyatları uygun güzergah ve saatlerde planlayarak ulaşımı sağlar; gerektiğinde belediye izinlerini de biz alırız."
      },
      {
        "soru": "Adalar gibi ulaşımı zor bölgelere hizmet veriyor musunuz?",
        "cevap": "Evet, Adalar dahil İstanbul'un tüm ilçelerine, lojistik planlamasını önceden yaparak hizmet sunuyoruz."
      },
      {
        "soru": "Şantiyeye giriş için özel izin gerekiyor mu?",
        "cevap": "Bina yönetimi veya belediye onayı gereken özel bölgelerde, gerekli izin süreçlerini sizinle koordineli şekilde yönetebiliriz."
      },
      {
        "soru": "Ekipman teslimatı için yol genişliği önemli mi?",
        "cevap": "Evet, özellikle büyük mobil ve paletli vinçlerde yol genişliği ve dönüş açıları teslimat planlamasında değerlendirilir; dar alanlar için kompakt ekipman modelleri önerilir."
      },
      {
        "soru": "Birden fazla şantiyeye eş zamanlı hizmet verebiliyor musunuz?",
        "cevap": "Evet, geniş ekipman parkımız sayesinde aynı anda birden fazla şantiyeye eş zamanlı hizmet verebiliyoruz."
      },
      {
        "soru": "Acil durum çağrılarına ne kadar sürede müdahale ediyorsunuz?",
        "cevap": "Acil durum hattımıza gelen taleplere ortalama 90 dakika içinde müdahale ediyoruz."
      },
      {
        "soru": "Hangi ilçelerde daha fazla ekipman bulunduruyorsunuz?",
        "cevap": "Stok dağılımımız talebe göre dinamik olarak planlanır; yoğun talep gören ilçelerde ek ekipman bulundurarak yanıt süresini kısaltıyoruz."
      }
    ]
  },
  {
    "kategori": "Forklift ve Telehandler",
    "icon": "🚜",
    "sorular": [
      {
        "soru": "Forklift kiralama hizmetiniz var mı?",
        "cevap": "Evet, elektrikli, dizel ve LPG forklift seçenekleriyle günlük, aylık ve uzun dönem kiralama hizmeti sunuyoruz."
      },
      {
        "soru": "Telehandler nedir, hangi işlerde kullanılır?",
        "cevap": "Telehandler, uzatılabilir bumu sayesinde hem yük kaldırma hem de yüksek noktalara malzeme taşıma yapabilen çok amaçlı bir iş makinesidir; şantiye ve depo operasyonlarında yaygın kullanılır."
      },
      {
        "soru": "Elektrikli forklift hangi ortamlarda tercih edilmeli?",
        "cevap": "Elektrikli forklift; kapalı depo, gıda ve hassas üretim alanları gibi emisyon ve gürültü hassasiyeti olan ortamlarda tercih edilmelidir."
      },
      {
        "soru": "Dizel forklift hangi durumlarda daha uygundur?",
        "cevap": "Açık şantiye alanlarında, ağır yük taşıma ve uzun çalışma saatleri gerektiren işlerde dizel forklift daha uygundur."
      },
      {
        "soru": "Forklift operatörlü kiralanabiliyor mu?",
        "cevap": "Evet, forklift kiralamalarımızda talebiniz halinde sertifikalı operatör desteği sağlanmaktadır."
      },
      {
        "soru": "İkinci el forklift kiralama seçeneğiniz var mı?",
        "cevap": "Evet, bütçe dostu ihtiyaçlar için ikinci el forklift kiralama seçeneğimiz de mevcuttur."
      },
      {
        "soru": "Forklift kapasiteleri nelerdir?",
        "cevap": "Filomuzda farklı taşıma kapasitelerine sahip forklift modelleri bulunmaktadır; ihtiyacınıza göre en uygun kapasite önerilir."
      },
      {
        "soru": "Telehandler ile vinç arasındaki fark nedir?",
        "cevap": "Telehandler hem yük taşıma hem de malzeme yükleme-boşaltma için tasarlanmış esnek bir makinedir; vinç ise daha ağır ve hassas kaldırma operasyonlarına yöneliktir."
      },
      {
        "soru": "Kısa dönem forklift kiralama mümkün mü?",
        "cevap": "Evet, günlük veya haftalık kısa dönem forklift kiralama seçeneğimiz mevcuttur."
      },
      {
        "soru": "Forklift teslimat süresi ne kadar?",
        "cevap": "Stok durumuna göre genellikle 24 saat içinde forklift teslimatı yapılmaktadır."
      }
    ]
  },
  {
    "kategori": "Teknik Sorular",
    "icon": "⚙️",
    "sorular": [
      {
        "soru": "Bom uzunluğu ne anlama gelir?",
        "cevap": "Bom, vincin uzayabilen kol kısmıdır. Bom uzunluğu, vincin erişebileceği maksimum mesafeyi ve yüksekliği belirler; uzunluk arttıkça taşınabilecek yük kapasitesi azalır."
      },
      {
        "soru": "Ton-metre kavramı nedir?",
        "cevap": "Ton-metre, bir vincin kaldırma kapasitesini ifade eden, yük ağırlığı (ton) ile bumun erişim mesafesinin (metre) çarpımına dayanan teknik bir değerdir."
      },
      {
        "soru": "Zemin taşıma kapasitesi neden önemli?",
        "cevap": "Vinç ve yükün toplam ağırlığını taşıyacak zemin yeterince sağlam olmalıdır; aksi halde devrilme riski oluşur. Yumuşak zeminlerde ek plaka/takoz desteği veya paletli vinç tercih edilir."
      },
      {
        "soru": "Vinç kurulumu ne kadar sürer?",
        "cevap": "Standart bir mobil veya sepetli vinç kurulumu genellikle 30–60 dakika içinde tamamlanır; kule vinç gibi sabit sistemlerde kurulum süresi daha uzun olabilir."
      },
      {
        "soru": "Çalışma açısı kapasiteyi nasıl etkiler?",
        "cevap": "Bumun yatayla yaptığı açı arttıkça (daha dik konuma geldikçe) vincin stabilitesi ve erişimi değişir; doğru açı operatör tarafından yükün ve mesafenin güvenliğine göre belirlenir."
      },
      {
        "soru": "Rüzgar hızı sınırı nedir?",
        "cevap": "Çalışma yüksekliğine ve ekipman tipine bağlı olarak değişen rüzgar hız sınırları, üretici talimatlarına göre operatörlerimiz tarafından titizlikle takip edilir; sınır aşıldığında çalışma durdurulur."
      },
      {
        "soru": "Vinç hangi sıcaklık koşullarında çalışabilir?",
        "cevap": "Ekipmanlarımız geniş bir sıcaklık aralığında çalışacak şekilde üretilmiştir; aşırı soğuk veya sıcak hava koşullarında üretici talimatları doğrultusunda ek önlemler alınır."
      },
      {
        "soru": "Sepetli vinçte maksimum kişi/yük sınırı nedir?",
        "cevap": "Sepet kapasitesi modelden modele değişir; genellikle 1-4 kişi veya belirli bir kg sınırı bulunur. Bu bilgi her ekipman için teklif aşamasında paylaşılır."
      },
      {
        "soru": "Vinç ile yük arasında güvenli mesafe nasıl belirlenir?",
        "cevap": "Güvenli mesafe; yükün boyutuna, çalışma alanındaki engellere ve bumun hareket alanına göre operatör tarafından önceden hesaplanır ve saha işaretlemesiyle desteklenir."
      },
      {
        "soru": "Proje öncesi teknik keşif yapıyor musunuz?",
        "cevap": "Evet, özellikle büyük ölçekli veya karmaşık projelerde sahaya giderek teknik keşif yapıyor ve en uygun ekipman/operasyon planını birlikte belirliyoruz."
      }
    ]
  }
];

export const tumSorular: SSSItem[] = sssKategorileri.flatMap((k) => k.sorular);
