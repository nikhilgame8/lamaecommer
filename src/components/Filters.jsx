import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import {filterTypes, filterText} from '../data';

const FilterHead = styled.div`
border-radius: 5px;
border: 1px solid lightgrey;
padding: 8px;
text-align: center;
font-weight: 600;
`

const Filters = () => {

    return (
        <Accordion>
            <FilterHead>FILTERS</FilterHead>
            {
                filterText.map((item, i) => (
                    <Accordion.Item eventKey={i} key={i}>
                        <Accordion.Header>{item}</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                {
                                    filterTypes[i].map((filter, j)=>(
                                        <div key={j} className="mb-3">
                                <Form.Check
                                    type="checkbox"
                                    id={`default`}
                                    label={filter}
                                /></div>
                                    ))
                                }
                                </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    )
}

export default Filters
