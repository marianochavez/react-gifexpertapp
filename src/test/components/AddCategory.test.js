import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import { AddCategory } from "../../components/AddCategory";



describe("Test AddCategory", () => {

    const setCategory = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategory}/>);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategory}/>);
    });
    
    test('should show AddCategory correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should change the text box', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change',{ target: {value} });

        expect(wrapper.find('p').text().trim()).toBe(value);

    })

    test('should not add a category if it is empty', () => {

        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategory).not.toHaveBeenCalled();
    })
    
    test('should call setCategories and clean the text box', () => {
        const value = 'Pokemon';
        // const input = wrapper.find('input');
        wrapper.find('input').simulate('change', {target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        expect(setCategory).toHaveBeenCalled();
        expect(wrapper.find('input').props().value).toBe('');
    })
    

});