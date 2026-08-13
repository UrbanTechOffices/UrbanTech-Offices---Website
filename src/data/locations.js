// src/data/locations.js
// Ordered as you requested. Each entry has slug, name, hero image path and an auto-generated "about" blurb (~150 words).

import electronicCityImg from "../assets/locations-thumbnails/electronic-city.jpg";
import whitefieldImg from "../assets/locations-thumbnails/whitefield.jpg";
import marathahalliImg from "../assets/locations-thumbnails/marathahalli.png";
import koramangalaImg from "../assets/locations-thumbnails/koramangala.jpg";
import indiranagarImg from "../assets/locations-thumbnails/indiranagar.jpg";
import sarjapurRoadImg from "../assets/locations-thumbnails/sarjapur-road.webp";
import hebbalImg from "../assets/locations-thumbnails/hebbal.jpg";
import mgRoadImg from "../assets/locations-thumbnails/mg-road.jpg";
import bannerghattaRoadImg from "../assets/locations-thumbnails/bannerghatta-road.webp";
import hsrLayoutImg from "../assets/locations-thumbnails/hsr-layout.jpg";
import jayanagarImg from "../assets/locations-thumbnails/jayanagar.jpg";
import centralBangaloreImg from "../assets/locations-thumbnails/central-bangalore.webp";

export const LOCATIONS = [
  {
    slug: "electronic-city",
    name: "Electronic City",
    hero: "/assets/locations/electronic-city/1.jpg",
    image: electronicCityImg,
    description: "Electronic City is Bangalore's largest dedicated IT and industrial corridor, home to major technology campuses and a mature ecosystem of vendors, transport and civic infrastructure. Its well-planned layout and arterial road access make daily operations smooth for large teams. Businesses here benefit from cost-efficient real estate without compromising on scale or connectivity. It's a natural fit for companies wanting an established, business-first address.",
    about: "Electronic City is Bangalore’s powerhouse for technology and innovation — a sprawling hub where established IT parks sit beside bustling start-ups. With a dense concentration of major technology campuses, excellent corporate amenities and 24/7 services, Electronic City offers fast access to talent, transport links and cost-efficient office choices. Modern buildings provide plug-and-play workspaces while surrounding residential areas offer convenience for staff. The neighborhood’s infrastructure, metro connectivity plans and proximity to major highways make it a strategic address for companies wanting scale without the premium price tag. If you want modern facilities, reliable connectivity, and an ecosystem that supports growth — Electronic City delivers the whole package."
  },
  {
    slug: "whitefield",
    name: "Whitefield",
    hero: "/assets/locations/whitefield/1.jpg",
    image: whitefieldImg,
    description: "Whitefield is one of Bangalore's most established international business districts, anchored by multinational campuses, premium hospitality and upscale residential clusters. The area's Class-A building stock and mature social infrastructure make it easy to host clients and attract senior talent. Excellent connectivity via the outer ring road and metro extension adds to its appeal. It's an address that signals scale and stability from day one.",
    about: "Whitefield blends global corporate campuses with lifestyle conveniences — malls, hotels, and premium residences. Over the last decade it has matured into one of Bangalore’s most sought-after commercial belts, hosting multinational headquarters and modern office complexes. Expect Class-A buildings, good road connectivity and easy access to international-standard hospitality and retail. Whitefield attracts a highly skilled workforce and offers abundant co-working and managed-office options ideal for enterprises that need full-service infrastructure. The area pairs business efficiency with after-work leisure, making it ideal for teams who value both performance and quality of life."
  },
  {
    slug: "marathahalli",
    name: "Marathahalli",
    hero: "/assets/locations/marathahalli/1.jpg",
    image: marathahalliImg,
    description: "Marathahalli sits at a key junction between the Outer Ring Road and Bangalore's major tech corridors, giving teams quick reach to neighboring business districts without a long commute. The area offers a practical mix of office formats, from compact floors to larger commercial spaces, backed by dependable retail and transport support. It suits companies that want central-corridor access at a more manageable cost. A dependable, well-connected base for growing teams.",
    about: "Marathahalli stands as a dynamic node between the Outer Ring Road and major IT corridors — a robust mix of office towers, retail hubs and seamless transport links. The area is prized for straightforward access to multiple tech parks, wide arterial roads and plentiful support services for corporate teams. With a variety of office size options — from boutique spaces to mid-sized commercial floors — Marathahalli suits fast-scaling companies seeking connectivity without long commutes. The neighborhood’s practical infrastructure and evolving business amenities provide strong value for firms looking to balance cost and convenience."
  },
  {
    slug: "koramangala",
    name: "Koramangala",
    hero: "/assets/locations/koramangala/1.jpg",
    image: koramangalaImg,
    description: "Koramangala is Bangalore's most recognizable startup and innovation district, known for its dense mix of founders, investors and creative talent. The neighborhood's café culture and constant footfall create natural networking opportunities right outside your door. Offices here range from characterful heritage buildings to sleek modern interiors, offering flexibility in how you present your brand. It's the address of choice for teams that want energy and visibility in equal measure.",
    about: "Koramangala is the heartbeat of Bangalore’s startup culture: energetic streets, premium cafés and a thriving entrepreneurial ecosystem. This fashionable district blends creative energy with top-tier office spaces and co-working hubs, making it ideal for early-stage startups and creative teams. The location benefits from excellent connectivity to central Bangalore and a strong talent pool, plus lifestyle perks that help attract and retain staff. Offices here offer a blend of character and utility — modern interiors inside architecturally interesting buildings. Choose Koramangala if you want presence, buzz and easy access to networking and events."
  },
  {
    slug: "indiranagar",
    name: "Indiranagar",
    hero: "/assets/locations/indiranagar/1.jpg",
    image: indiranagarImg,
    description: "Indiranagar pairs a distinctly premium, design-conscious character with genuine day-to-day convenience — tree-lined streets, boutique dining and easy metro access. It's favored by brand-conscious teams who want an office that reflects a polished, contemporary identity. The neighborhood's compact scale makes client visits and informal meetings effortless. A refined option for businesses that value atmosphere as much as function.",
    about: "Indiranagar mixes boutique sophistication with business comfort — trendy dining, well-designed office spaces and convenient transport. Once primarily residential, the area now hosts many premium small-to-medium offices and creative studios, making it perfect for companies that value style and accessibility. The locality’s vibrant street life and amenities contribute to workplace satisfaction and make client meetings feel effortless. Indiranagar offers the premium urban edge for businesses that want to combine professional presence with a distinctive local flavour."
  },
  {
    slug: "sarjapur-road",
    name: "Sarjapur Road",
    hero: "/assets/locations/sarjapur-road/1.jpg",
    image: sarjapurRoadImg,
    description: "Sarjapur Road is among Bangalore's fastest-developing commercial belts, with newly built campus-style offices and wide, uncongested roads. Its proximity to major IT clusters and residential townships makes it convenient for both operations and employee commute. Flexible leasing options and modern building specifications suit companies planning for near-term growth. A forward-looking corridor for teams scaling beyond their first office.",
    about: "Sarjapur Road is one of Bangalore’s fastest-growing commercial corridors, favored for its proximity to tech parks and residential hubs. The area offers newer, modern campus-style buildings, broad roads and expanding public transport options — ideal for companies looking to scale with space and accessibility. Sarjapur Road’s mix of new developments, flexible leasing and proximity to major IT clusters make it an attractive choice for firms seeking growth-oriented infrastructure without the steep central-city costs."
  },
  {
    slug: "hebbal",
    name: "Hebbal",
    hero: "/assets/locations/hebbal/1.jpg",
    image: hebbalImg,
    description: "Hebbal offers a quieter, greener setting without sacrificing accessibility, thanks to direct highway links to both the airport and central Bangalore. Its lakeside surroundings and lower congestion make for a pleasant daily commute compared to more built-up corridors. A steady wave of new commercial development is adding modern office stock to the area. Ideal for teams that want convenience with room to breathe.",
    about: "Hebbal is an emerging commercial hotspot with excellent highway access and growing office infrastructure. Known for its lakes and green pockets, Hebbal also hosts logistics-friendly highways that make employee commute and corporate travel efficient. The area has seen a steady rise in new office projects and corporate campuses, offering a balance of tranquility and accessibility. For businesses that prefer a less-congested address yet require seamless city and airport links, Hebbal is a strategic pick."
  },
  {
    slug: "mg-road",
    name: "MG Road",
    hero: "/assets/locations/mg-road/1.jpg",
    image: mgRoadImg,
    description: "MG Road places your business at the historic and commercial center of Bangalore, surrounded by landmark hotels, corporate showrooms and dense public transport links. It's a location built for visibility and prestige, ideal for client-facing operations. Government offices, business chambers and major transit hubs are all within easy reach. The classic choice for companies that want an unmistakably central address.",
    about: "MG Road sits at the pulse of central Bangalore — premium addresses, corporate showrooms and strong public transport connectivity. This iconic strip offers visibility, prestige and straightforward access to government and business centers. While premium in price, MG Road’s central location ensures your company is easy to find, with excellent client-facing amenities, hotels and transit options close by. It’s the classic choice for firms that want centrality, stature and an iconic business presence in the city."
  },
  {
    slug: "bannerghatta-road",
    name: "Bannerghatta Road",
    hero: "/assets/locations/bannerghatta-road/1.jpg",
    image: bannerghattaRoadImg,
    description: "Bannerghatta Road combines improving connectivity with noticeably lower commercial rents than Bangalore's core business districts. The corridor runs through established residential neighborhoods, giving easy access to a local talent pool and everyday amenities. Newer commercial developments are steadily raising the quality of available office space. A practical choice for cost-conscious businesses that still want solid access to the rest of the city.",
    about: "Bannerghatta Road offers a strong combination of affordable office inventory and improving connectivity. Stretching through growing suburban neighborhoods, the corridor has become attractive for businesses seeking cost-efficient workspace with good road links to central and southern parts of Bangalore. New commercial complexes and supportive services make it suitable for teams prioritizing operational efficiency and accessibility to residences and retail. For companies that want scale without central-city rent premiums, Bannerghatta Road is a practical, future-ready option."
  },
  {
    slug: "hsr-layout",
    name: "HSR Layout",
    hero: "/assets/locations/hsr-layout/1.jpg",
    image: hsrLayoutImg,
    description: "HSR Layout is a well-planned neighborhood known for its wide, tree-lined streets and a fast-growing scene of cafés, startups and community spaces. It appeals to small and mid-sized businesses that want a professional base with a relaxed, neighborhood feel. Strong residential density nearby means easy access to a local workforce. A comfortable, modern setting for teams that value livability alongside business practicality.",
    about: "HSR Layout is a planned suburb with a modern urban feel — tree-lined avenues, well-laid infrastructure and a growing business ecosystem. The area is popular with small-to-medium businesses seeking friendly neighborhood vibes alongside professional facilities. With a strong residential catchment and growing café and retail scene, HSR offers convenience for employee commute and client meetups. It’s an excellent location for teams that value a modern, community-oriented base without sacrificing business practicality."
  },
  {
    slug: "jayanagar",
    name: "Jayanagar",
    hero: "/assets/locations/jayanagar/1.jpg",
    image: jayanagarImg,
    description: "Jayanagar offers a calmer, more established setting with mature tree cover, strong civic infrastructure and a dependable community feel. It suits service-oriented businesses that prefer steady, predictable surroundings over high-energy commercial buzz. Good road links keep the neighborhood well connected to central Bangalore despite its quieter character. A solid, low-friction choice for teams prioritizing stability.",
    about: "Jayanagar blends traditional charm with steadily modernizing commercial pockets. Known for its tree-lined streets and established neighborhoods, the area now hosts boutique office spaces and service-oriented businesses. Jayanagar’s calm environment, solid civic amenities and community-first atmosphere make it attractive for companies seeking a quieter, dependable location while staying connected to central business districts by solid road links."
  },
  {
    slug: "central-bangalore",
    name: "Central Bangalore",
    hero: "/assets/locations/central-bangalore/1.jpg",
    image: centralBangaloreImg,
    description: "Central Bangalore puts your business at the crossroads of the city's commercial, civic and cultural life, with unmatched access to transit, clients and talent. Businesses here enjoy high footfall, premium visibility and proximity to key institutions and business services. It's a location built for companies that need to be reachable from every direction. The definitive address for firms prioritizing centrality above all else.",
    about: "Central Bangalore covers the city’s primary commercial heart — offering immediate access to corporate hubs, premium client-facing addresses, transit nodes and a wide spectrum of business services. This zone is ideal for enterprises seeking prestige, central accessibility and high footfall. While premium in cost, locations here provide unmatched convenience for meetings, recruitment and urban presence. For businesses that prioritize visibility and direct connectivity across the city, Central Bangalore remains unmatched."
  }
];
