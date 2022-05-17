'use strict';

const {HashTable,Node} = require('../HashTable');

describe('hashTables', () => {
  let hashmap;
  beforeAll(() => {
    hashmap = new HashTable(5000);
    hashmap.set('owner', 'salam');
    hashmap.set('email', 'salam@gmail.com');
  });
  it('hash and set function /can add a key/value to the hashtable/can hash a key to an in-range value', () => {
    hashmap.set('Salam', 'CS');
    console.log(hashmap);
    expect(hashmap.hash('salam')).toBe(74);
  });
  it('contain function', () => {
    expect(hashmap.contain('owner')).toBe(true);
  });
  it('can get a stored value by its key', () => {
    hashmap.set('Salam', 'CS');
    console.log(hashmap.get('Salam'));
    expect(hashmap.get('salam')).toString({ Salam: 'CS' });
    // returns null for a key that does not exist in the hashtable
    expect(hashmap.get('sara')).toBe(null);
  });
  test('can handle a collision within the hashtable', () => {
    hashmap.set('code', 'code value');
    hashmap.set('edoc', 'edoc value');
    expect(hashmap.contain('code')).toBe(true);
    expect(hashmap.contain('edoc')).toBe(true);
  });
  test('can retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(hashmap.get('code')).toString({ code: 'code value' });
    expect(hashmap.get('edoc')).toString({ edoc: 'edoc value' });
  });
  it('returns a list of all unique keys that exist in the hashtable', () => {
    expect(hashmap.keys()).toEqual(['Salam','Salam', 'code', 'edoc', 'email','owner']);
  });
});
