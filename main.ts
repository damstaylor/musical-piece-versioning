import MusicalPieceVersioning from './MusicalPieceVersioning';

const v = new MusicalPieceVersioning();
v.save({ title: 'My Hero', artist: 'Foo Fighters' }); // 0
v.print();
v.save({ title: 'Monkey Wrench' }); // 1
v.print();
v.save({ album: 'The Colour and the Shape', releaseDate: new Date('1997-05-20') }); // 2
v.print();

v.restore(1);
v.print();