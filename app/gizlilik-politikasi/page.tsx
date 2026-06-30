import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası ve KVKK Aydınlatma Metni",
  description:
    "Vinç Deposu (Express Vinç Hizmetleri ve Nak. Ltd. Şti.) kişisel verilerin korunması, gizlilik politikası ve KVKK aydınlatma metni.",
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const bolumler = [
  {
    baslik: "1. Veri Sorumlusu",
    icerik: (
      <>
        <p>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında veri sorumlusu;
        </p>
        <p className="font-semibold text-gray-900 mt-2">
          Express Vinç Hizmetleri ve Nak. Ltd. Şti. (&quot;Vinç Deposu&quot;)
        </p>
        <p className="mt-1">
          İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi D:4.Ada A Blok Kat:1 D:112,
          34490 Başakşehir/İstanbul
        </p>
        <p className="mt-1">Telefon: 0532 303 90 89 &nbsp;·&nbsp; E-posta: info@vincdeposu.com.tr</p>
      </>
    ),
  },
  {
    baslik: "2. Toplanan Kişisel Veriler",
    icerik: (
      <>
        <p>
          vincdeposu.com.tr internet sitesi (&quot;Site&quot;) üzerinden iletişim formu doldurmanız,
          bizi telefonla aramanız, WhatsApp üzerinden mesaj göndermeniz veya e-posta ile iletişime
          geçmeniz halinde aşağıdaki kişisel verileriniz işlenebilir:
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>Ad, soyad</li>
          <li>Telefon numarası</li>
          <li>E-posta adresi</li>
          <li>İletişim formunda veya mesajda paylaştığınız proje/talep bilgileri</li>
          <li>Site kullanımına ilişkin teknik veriler (IP adresi, tarayıcı bilgisi, ziyaret edilen sayfalar)</li>
        </ul>
      </>
    ),
  },
  {
    baslik: "3. Kişisel Verilerin İşlenme Amaçları",
    icerik: (
      <>
        <p>Toplanan kişisel verileriniz şu amaçlarla işlenmektedir:</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>Talebinize veya projenize uygun vinç/manlift kiralama teklifi hazırlamak</li>
          <li>Sizinle iletişime geçmek ve sorularınızı yanıtlamak</li>
          <li>Kiralama sözleşmesi sürecini yürütmek</li>
          <li>Hizmet kalitemizi ölçmek ve geliştirmek</li>
          <li>Yasal yükümlülüklerimizi yerine getirmek</li>
        </ul>
      </>
    ),
  },
  {
    baslik: "4. Toplanma Yöntemi ve Hukuki Sebebi",
    icerik: (
      <p>
        Kişisel verileriniz; Site üzerindeki iletişim formu, telefon görüşmeleri ve WhatsApp/e-posta
        yazışmaları aracılığıyla, KVKK&apos;nın 5. maddesinde yer alan &quot;ilgili kişinin temel hak ve
        özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati için veri işlenmesinin
        zorunlu olması&quot; ve &quot;bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması&quot;
        hukuki sebeplerine dayanılarak işlenmektedir.
      </p>
    ),
  },
  {
    baslik: "5. Saklanma Süresi ve Korunması",
    icerik: (
      <p>
        Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen
        zamanaşımı süreleri dikkate alınarak saklanır. Verileriniz, yetkisiz erişime, kayba veya kötüye
        kullanıma karşı uygun teknik ve idari güvenlik tedbirleriyle korunmaktadır. Saklama süresinin
        sona ermesi halinde verileriniz silinir, yok edilir veya anonim hale getirilir.
      </p>
    ),
  },
  {
    baslik: "6. Üçüncü Kişilerle Paylaşım",
    icerik: (
      <p>
        Kişisel verileriniz, yasal zorunluluklar dışında veya açık rızanız olmadan üçüncü kişilerle
        paylaşılmaz, pazarlama amacıyla satılmaz ya da kiralanmaz. Sitenin teknik altyapısını sağlayan
        barındırma (hosting) hizmet sağlayıcıları gibi sınırlı sayıda hizmet sağlayıcıyla, sadece
        hizmetin sunulabilmesi için gerekli ölçüde veri paylaşımı yapılabilir.
      </p>
    ),
  },
  {
    baslik: "7. Çerezler (Cookies)",
    icerik: (
      <p>
        Site, temel işlevselliği sağlamak dışında şu an için reklam veya takip amaçlı çerez
        kullanmamaktadır. İleride analiz veya pazarlama amaçlı çerez kullanılması durumunda bu
        politika güncellenecek ve gerekli onay mekanizmaları Site üzerinde sunulacaktır.
      </p>
    ),
  },
  {
    baslik: "8. KVKK Kapsamındaki Haklarınız",
    icerik: (
      <>
        <p>KVKK&apos;nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak;</p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li>Kişisel verisinin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>İşlenme amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
          <li>Yurt içinde/dışında aktarıldığı üçüncü kişileri bilme,</li>
          <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
          <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini/yok edilmesini isteme,</li>
          <li>Yapılan işlemlerin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
          <li>Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhe bir sonuç çıkmasına itiraz etme,</li>
          <li>Kanuna aykırı işlenme nedeniyle zarara uğraması halinde zararın giderilmesini talep etme</li>
        </ul>
        <p className="mt-3">haklarına sahiptir.</p>
      </>
    ),
  },
  {
    baslik: "9. Başvuru Yöntemi",
    icerik: (
      <p>
        Yukarıda sayılan haklarınızı kullanmak için talebinizi yazılı olarak veya kayıtlı elektronik
        posta (KEP) adresi, mobil imza ya da Şirketimizde daha önce bildirdiğiniz ve sistemimizde
        kayıtlı bulunan e-posta adresinizi kullanmak suretiyle{" "}
        <a href="mailto:info@vincdeposu.com.tr" className="text-yellow-600 font-semibold hover:underline">
          info@vincdeposu.com.tr
        </a>{" "}
        adresine veya yukarıda belirtilen şirket adresimize iletebilirsiniz. Talebiniz, niteliğine göre
        en kısa sürede ve en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılır.
      </p>
    ),
  },
  {
    baslik: "10. Politika Güncellemeleri",
    icerik: (
      <p>
        Bu Gizlilik Politikası, yasal düzenlemelerdeki değişiklikler veya iş süreçlerimizdeki
        güncellemeler doğrultusunda zaman zaman revize edilebilir. Güncel sürüm her zaman bu sayfada
        yayınlanır.
      </p>
    ),
  },
];

export default function GizlilikPolitikasiPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Kişisel Verilerin Korunması
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Gizlilik Politikası</h1>
          <p className="text-gray-300 leading-relaxed">
            Vinç Deposu olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu sayfada,
            verilerinizi hangi amaçla topladığımızı, nasıl koruduğumuzu ve KVKK kapsamındaki
            haklarınızı şeffaf şekilde açıklıyoruz.
          </p>
          <p className="text-gray-500 text-sm mt-4">Son güncelleme: 1 Temmuz 2026</p>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          {bolumler.map((b) => (
            <div key={b.baslik}>
              <h2 className="text-xl font-black text-gray-900 mb-3">{b.baslik}</h2>
              <div className="text-gray-600 leading-relaxed text-[15px]">{b.icerik}</div>
            </div>
          ))}

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-sm text-gray-700 leading-relaxed">
            <strong className="block text-gray-900 mb-1">Bilgilendirme Notu</strong>
            Bu metin, KVKK&apos;ya genel uyum sağlamak amacıyla hazırlanmış bir aydınlatma metnidir.
            İşletmenize özel veri işleme süreçleri (örn. kamera kaydı, çalışan verileri, tedarikçi
            sözleşmeleri) varsa, metnin bir KVKK uzmanı veya avukat tarafından gözden geçirilmesini
            öneririz.
          </div>

          <div className="text-center pt-4">
            <Link href="/iletisim" className="text-yellow-600 font-semibold hover:underline">
              Sorularınız mı var? Bizimle iletişime geçin →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
