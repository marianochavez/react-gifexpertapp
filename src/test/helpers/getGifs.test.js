import { getGifs } from "../../helpers/getGifs";


describe('Test getGifs fetch', () => {

    test('should return 10 elements', async() => {

        const gifs = await getGifs('Pokemon');
        expect(gifs.length).toBe(10);

    })

    test('should return 0 elements if arg is empty', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })
    

});