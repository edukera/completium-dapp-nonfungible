const robotributes = [
  { id: '973012', name: 'maid-robot-1', attr: ['cleaner','vintage'], badge: 0, price: 1.3 },
  { id: '973013', name: 'cleaner-robot', attr: ['cleaner', 'vintage'], badge: 2, price: 2.2 },
  { id: '973014', name: 'maid-robot-2', attr: ['cleaner','vintage'], badge: 0, price: 1.4 },
  { id: '973015', name: 'vintage-robot-3', attr: ['vintage', 'toy'], badge: 0, price: 3.4 },
  { id: '973016', name: 'vintage-robot-2', attr: ['vintage', 'toy'], badge: 1, price: 2.8 },
  { id: '973017', name: 'lg-hub-robot', attr: ['modern', 'ai', 'lg'], badge: 1, price: 1 },
  { id: '973018', name: 'humanoid', attr: ['modern', 'humanoid', 'ai'], badge: 0, price: 2.4 },
  { id: '973019', name: 'asimo', attr: ['modern', 'ai'], badge: 0, price: 4.1 },
  { id: '973020', name: 'bomb-disposal-robot', attr: ['rescure', 'disposal'], badge: 0, price: 12.4  },
  { id: '973021', name: 'boston-dynamic-spot', attr: ['boston dynamic', 'modern' ], badge: 0, price: 18.9 },
  { id: '973022', name: 'aibo-2', attr: ['dog', 'modern', 'ai'], badge: 0, price: 1.2 },
  { id: '973023', name: 'aibo-1', attr: [ 'ai', 'modern'], badge: 1, price: 2.7 },
  { id: '973024', name: 'robots', attr: ['dog', 'master', 'modern' ], badge: 0, price: 4 },
  { id: '973025', name: 'omate-yumi', attr: ['modern'], badge: 0, price: 1.9  },
  { id: '973026', name: 'tankbot-fight', attr: ['modern', 'toy', 'ai'], badge: 1, price: 3.7  },
  { id: '973027', name: 'tripod-turret', attr: [ 'war', 'modern', 'portal', 'video game'], badge: 0, price: 4.1 },
  { id: '973028', name: 'wheatley', attr: [ 'war', 'modern', 'protal', 'video game'], badge: 0, price: 2.5 },
  { id: '973029', name: 'robot', attr: ['simple', 'modern', 'ai'], badge: 0, price: 0.4 },
  { id: '973030', name: 'glados', attr: [ 'modern', 'war', 'portal', 'video game'], badge: 0, price: 1.9 },
  { id: '973031', name: 'toy-chick', attr: [ 'toy', 'small' ], badge: 0, price: 0.5 },
  { id: '973032', name: 'toy-robot', attr: [ 'toy', 'small' ], badge: 0, price: 0.4 },
  { id: '973033', name: 'wind-up-toy', attr: [ 'toy', 'small' ], badge: 0, price: 0.2 },
  { id: '973034', name: 'machine-learning-1', attr: [ 'developer', 'ai', 'mac' ], badge: 0, price: 7.8 },
  { id: '973035', name: 'machine-learning-2', attr: [ 'developer', 'ai', 'mac' ], badge: 0, price: 5.6 },
  { id: '973036', name: 'machine-learning-3', attr: [ 'developer', 'ai', 'mac' ], badge: 0, price: 5.6 },
  { id: '973037', name: 'machine-learning-5', attr: [ 'developer', 'ai', 'mac' ], badge: 0, price: 5.6 },
  { id: '973038', name: 'machine-learning-6', attr: [ 'developer', 'ai', 'mac' ], badge: 0, price: 5.6 },
  { id: '973039', name: 'machine-learning-4', attr: [ 'developer', 'ai', 'mac' ], badge: 0, price: 7.6 },
  { id: '973040', name: 'robot-experiment-1', attr: [ 'science', 'ai', 'experiment'], badge: 0, price: 5.3 },
  { id: '973041', name: 'translation-robot', attr: [ 'science', 'ai', 'translater'],  badge: 0, price: 5.3 },
  { id: '973042', name: 'robot-idea', attr: [ 'sicence', 'ai' ], badge: 0, price: 1.4 },
  { id: '973043', name: 'laboratory-robot-1', attr: [ 'science', 'laboratory', 'arm'], badge: 0, price: 8.6 },
  { id: '973044', name: 'laboratory-robot-2', attr: [ 'science', 'laboratory', 'ai'], badge: 0, price: 4.9 },
  { id: '973045', name: 'robot-experiment-2', attr: ['science', 'ai', 'experiment'], badge: 0, price: 5.3 },
  { id: '973046', name: 'mobile-robot-2', attr: ['logistic', 'package', 'shipping'], badge: 0, price: 9.5 },
  { id: '973047', name: 'mobile-robot-1', attr: ['logistic', 'package', 'shipping'], badge: 0, price: 7.5 },
  { id: '973048', name: 'logistic-robot', attr: [ 'logistic', 'package', 'shipping', 'ai' ], badge: 0, price: 8 },
  { id: '973049', name: 'mobile-robot-protocol', attr: [ 'logistic', 'package', 'shipping'], badge: 0, price: 7.4 },
  { id: '973050', name: 'mobile-robot-conflict', attr: [ 'logistic', 'package', 'shipping'], badge: 0, price: 6.1 },
  { id: '973051', name: 'mobile-robot-3', attr: [ 'logistic', 'package', 'shipping'], badge: 0, price: 5 },
  { id: '973052', name: 'photographer-robot', attr: [ 'media', 'vintage', 'photo', 'artist'], badge: 0, price: 3.1 },
  { id: '973053', name: 'conductor-robot', attr: [ 'media', 'music', 'ai' ], badge: 1, price: 6.7 },
  { id: '973054', name: 'artist-robot-3', attr: [ 'media', 'music', 'dj' ],  badge: 0, price: 8 },
  { id: '973055', name: 'artist-robot-2', attr: [ 'media', 'paint', 'creative' ], badge: 0, price: 4 },
  { id: '973056', name: 'artist-robot-1', attr: [ 'media', 'design', 'illustrator', 'creative' ], badge: 0, price: 4.1 },
  { id: '973057', name: 'vr-robot-2', attr: [ 'media', 'video game' ], badge: 0, price: 3.1 },
  { id: '973058', name: 'musician-robot', attr: [ 'media', 'music', 'player' ], badge: 2, price: 12.1 },
  { id: '973059', name: 'filmmaking-robot-1', attr: [ 'media', 'film' ], badge: 0, price: 4.7 },
  { id: '973060', name: 'vr-robot-1', attr: [ 'media', 'video game' ], badge: 0, price: 3.2 },
  { id: '973061', name: 'filmmaking-robot-2', attr: [ 'media', 'film' ], badge: 0, price: 4.5 },
  { id: '973062', name: 'cashier-robot-3', attr: ['business', 'payment'], badge: 0, price: 3.5 },
  { id: '973063', name: 'cashier-robot-4', attr: ['business', 'payment'], badge: 0, price: 3.4 },
  { id: '973064', name: 'analysis-robot', attr: ['business', 'payment'],  badge: 0, price: 5.6 },
  { id: '973065', name: 'cashier-robot-1', attr: ['business', 'payment'], badge: 0, price: 3.3 },
  { id: '973066', name: 'cashier-robot-2', attr: ['business', 'payment'], badge: 0, price: 3.6 },
  { id: '973067', name: 'cashier-robot-6', attr: ['business', 'payment'], badge: 0, price: 3.5 },
  { id: '973068', name: 'cashier-robot-5', attr: ['business', 'payment'], badge: 0, price: 3.3 },
  { id: '973069', name: 'currency-exchange-robot', attr: ['business', 'finance'], badge: 0, price: 4.1 },
  { id: '973070', name: 'operator-robot', attr: ['business', 'finance'], badge: 0, price: 3.6 },
  { id: '973071', name: 'multitasking-robot', attr: ['business', 'finance'], badge: 0, price: 3.7 },
  { id: '973072', name: 'moey-management-robot', attr: ['business'], badge: 0, price: 3.2 },
  { id: '973073', name: 'diagnosis-robot', attr: ['medical', 'doctor'], badge: 0, price: 5.1 },
  { id: '973074', name: 'operation-robot-6', attr: ['medical', 'operation', 'arm'], badge: 1, price: 12.1 },
  { id: '973075', name: 'operation-robot-2', attr: ['medical', 'doctor', 'arm'], badge: 0, price: 9.5 },
  { id: '973076', name: 'operation-robot-1', attr: ['medical', 'doctor', 'arm'], badge: 2, price: 14.1 },
  { id: '973077', name: 'doctor-robot', attr: ['medical', 'doctor', 'arm'], badge: 0, price: 10.5 },
  { id: '973078', name: 'dentist-robot', attr: ['medical', 'doctor', 'dentist'], badge: 0, price: 11.3 },
  { id: '973079', name: 'operation-robot-3', attr: ['medical', 'doctor', 'arm'], badge: 0, price: 10.5 },
  { id: '973080', name: 'operation-robot-5', attr: ['medical', 'doctor', 'arm'], badge: 0, price: 10.5 },
  { id: '973081', name: 'phamacist-robot', attr: ['medical', 'pill'], badge: 0, price: 4.5 },
  { id: '973082', name: 'operation-robot-4', attr: ['medical', 'doctor', 'arm'], badge: 0, price: 10.5 },
  { id: '973083', name: 'factory-robot', attr: ['factory', 'car', 'arm', 'builder'], badge: 0, price: 13.4 },
  { id: '973084', name: 'construction-robot-2', attr: ['factory', 'builder'], badge: 0, price: 17.6 },
  { id: '973085', name: 'construction-robot-4', attr: ['factory', 'builder'], badge: 1, price: 27.6 },
  { id: '973086', name: 'construction-robot-3', attr: ['factory', 'builder'], badge: 2, price: 39.6 },
  { id: '973087', name: 'construction-robot-1', attr: ['factory', 'builder'], badge: 2, price: 42.6 },
  { id: '973088', name: 'astronaut-robot-2', attr: ['explorer'], badge: 0, price: 34.3 },
  { id: '973089', name: 'diver-robot', attr: ['explorer', 'submarine', 'sea'], badge: 0, price: 28.3 },
  { id: '973090', name: 'astronaut-robot-1', attr: ['explorer', 'moon'], badge: 1, price: 44.2 },
  { id: '973091', name: 'explorer-robot-1', attr: ['explorer', 'ai', 'moon'], badge: 0, price: 26.4 },
  { id: '973092', name: 'explorer-robot-3', attr: ['explorer', 'ai', 'moon'], badge: 0, price: 24.5 },
  { id: '973093', name: 'explorer-robot-2', attr: ['explorer', 'ai', 'moon'], badge: 0, price: 23.9 },
  { id: '973094', name: 'fire-fighting-robot-1', attr: ['service', 'fighter'], badge: 1, price: 14.3 },
  { id: '973095', name: 'fire-fighting-robot-2', attr: ['service', 'fighter'], badge: 0, price: 12.3 },
  { id: '973096', name: 'fire-fighting-robot-3', attr: ['service', 'fighter'], badge: 0, price: 11.3 },
  { id: '973097', name: 'information-service-robot', attr: ['service', 'data'], badge: 0, price: 6.5 },
  { id: '973098', name: 'spy-robot-1', attr: ['service', 'spy', 'small'], badge: 0, price: 4.9 },
  { id: '973099', name: 'messenger-robot', attr: ['service', 'post'], badge: 0, price: 8.4 },
  { id: '973100', name: 'waiter-robot-2', attr: ['food'], badge: 0, price: 4.3 },
  { id: '973101', name: 'waiter-robot-1', attr: ['food'], badge: 0, price: 4.2 },
  { id: '973102', name: 'barista-robot', attr: ['food'],  badge: 0, price: 4.5 },
  { id: '973103', name: 'cooking-robot-2', attr: ['food', 'chef'], badge: 0, price: 12.3 },
  { id: '973104', name: 'cooking-robot-1', attr: ['food', 'chef'], badge: 1, price: 15.6 },
  { id: '973105', name: 'vending-machine-robot', attr: ['food', 'payment'], badge: 0, price: 4.6 },
  { id: '973106', name: 'tassimo-brewbot', attr: ['food'], badge: 0, price: 5.5 },
  { id: '973107', name: 'waiter-robot-3', attr: ['food'], badge: 0, price: 4.5 },
  { id: '973108', name: 'laundry-robot', attr: ['cleaning'], badge: 0, price: 2.3 },
  { id: '973109', name: 'cleaning-robot-2', attr: ['cleaning'], badge: 0, price: 4.5 },
  { id: '973110', name: 'cleaning-robot-1', attr: ['cleaning'], badge: 0, price: 4.2 },
  { id: '973111', name: 'watering-robot-2', attr: ['ecological', 'plant'], badge: 0, price: 3.2 },
  { id: '973112', name: 'watering-robot-1', attr: ['ecological', 'plant', 'arm'], badge: 0, price: 2.2 },
  { id: '973113', name: 'tree-pot-robot', attr: ['ecological', 'plant'], badge: 0, price: 1.4  }
]