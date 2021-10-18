import MusicalPieceVersioning from './MusicalPieceVersioning';

let v = new MusicalPieceVersioning();
v.save({ title: 'My Hero', artist: 'Foo Fighters' });
v.print(); /* "[Version 1/1] Foo Fighters - My Hero - <Unknown album> (<Unknown year>)" */
v.save({ title: 'Monkey Wrench' });
v.print(); /* "[Version 2/2] Foo Fighters - Monkey Wrench - <Unknown album> (<Unknown year>)" */
v.save({ album: 'The Colour and the Shape', releaseDate: new Date('1997-05-20') });
v.print(); /* "[Version 3/3] Foo Fighters - Monkey Wrench - The Colour and the Shape (1997)" */

v.restore(1);
v.print(); /* "[Version 2/3] Foo Fighters - Monkey Wrench - The Colour and the Shape (1997)" */

v.save({ genre: 'Rock' });
v.save({ genre: 'Hard Rock' })
v.print(); /* "[Version 5/5] Foo Fighters - Monkey Wrench - The Colour and the Shape (1997)
- Warning: history is now full." */