export default function demoHotelType() {
  async function up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'hotelType',[{
          id: 'rm-101',
          hotelId: 'htl-1',
          name: 'Ocean View Deluxe Suite',
          description:
            'Spacious 65sqm suite featuring panoramic Indian Ocean views, a king bed, and a private marble bathroom with Jacuzzi.',
          basePrice: 250,
          capacity: 2,
          totalInventory: 5,
        },
        {
          id: 'rm-102',
          hotelId: 'htl-1',
          name: 'Private Pool Villa',
          description:
            'Ultimate privacy with a dedicated plunge pool, sun loungers, outdoor garden shower, and personal butler service.',
          basePrice: 450,
          capacity: 4,
          totalInventory: 2,
        },
        {
          id: 'rm-201',
          hotelId: 'htl-2',
          name: 'Executive King Room',
          description:
            'Sleek cityscape views from the 20th floor, ergonomic work desk, high-speed fiber internet, and premium espresso machine.',
          basePrice: 180,
          capacity: 2,
          totalInventory: 8,
        }],{});
  }

  async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('hotelType', null, {});
  }
}
