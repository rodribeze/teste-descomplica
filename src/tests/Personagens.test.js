import React from 'react';
import { render, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Home from '../views/Home'
import PersonagensContextProvider from '../contexts/PersonagensContextProvider'
import { fetchPeoples } from '../helpers/api'
import fetchPeoplesMock from './fetchPeoples.mock'
jest.mock("../helpers/api");

describe("<Home />", () => {

    beforeEach(() => {

        const peoples = fetchPeoplesMock;
        fetchPeoples.mockResolvedValueOnce(peoples);

    })
    
    beforeEach(async () => {
        await act(async () => {
            render(
                <PersonagensContextProvider>
                  <Home />
                </PersonagensContextProvider>
            );
        })
    });

    describe("when render", () => {
       
        it("verifica 10 personagens", async () => {
            const items = await screen.findAllByRole('button')
            expect(10).toBe(items.length);
        });
        
    });

});