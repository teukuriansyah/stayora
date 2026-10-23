export default function demoHotel() {
  async function up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Hotel',
      [
        {
          id: 'htl-1',
          name: 'Grand Luxury Villa & Spa',
          slug: 'grand-luxury-villa-spa',
          description:
            'An exclusive tropical sanctuary nestled in Nusa Dua, offering private infinity pools, world-class spa treatments, and breathtaking oceanfront views ideal for luxury seekers.',
          city: 'Bali',
          country: 'Indonesia',
          address: 'Jl. Raya Nusa Dua No. 88, Bali',
          starRating: 5,
          avgRating: 4.9,
          reviewCount: 128,
          pricePerNight: 250,
          imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
          amenities: JSON.stringify(['Swimming Pool','Spa & Wellness','Free High-Speed WiFi','Airport Shuttle']),
        },
        {
          id: 'htl-2',
          name: 'The Obsidian Boutique Hotel',
          slug: 'obsidian-boutique-hotel',
          description:
            'A ultra-modern chic hotel located in the dynamic heart of Shinjuku. Featuring minimalist aesthetic architecture, sky lounge cocktails, and seamless access to Tokyo metro.',
          city: 'Tokyo',
          country: 'Japan',
          address: 'Shinjuku City 3-14-1, Tokyo',
          starRating: 4,
          avgRating: 4.7,
          reviewCount: 94,
          pricePerNight: 180,
          imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb',
          amenities: JSON.stringify(['Bar & Lounge','City View','Free WiFi','Fitness Center'])}],{});
  }

  async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hotel', null, {});
  }
}
