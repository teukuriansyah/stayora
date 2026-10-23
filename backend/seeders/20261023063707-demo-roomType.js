'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roomTypes', [
      { 
        idRoom: 'rm-101', 
        idHotel: 'htl-1', 
        name: 'Ocean View Deluxe Suite', 
        description: 'Spacious 65sqm suite featuring panoramic Indian Ocean views, a king bed, and a private marble bathroom with Jacuzzi.',
        basePrice: 250, 
        capacity: 2, 
        totalInventory: 5 
      },
      { 
        idRoom: 'rm-102', 
        idHotel: 'htl-1', 
        name: 'Private Pool Villa', 
        description: 'Ultimate privacy with a dedicated plunge pool, sun loungers, outdoor garden shower, and personal butler service.',
        basePrice: 450, 
        capacity: 4, 
        totalInventory: 2 
      },
      { 
        idRoom: 'rm-201', 
        idHotel: 'htl-2', 
        name: 'Executive King Room', 
        description: 'Sleek cityscape views from the 20th floor, ergonomic work desk, high-speed fiber internet, and premium espresso machine.',
        basePrice: 180, 
        capacity: 2, 
        totalInventory: 8 
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
