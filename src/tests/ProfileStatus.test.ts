import React from "react";
import {ProfileStatus} from "../components/MainWindow/Profile/ProfileInfo/ProfileStatus/ProfileStatus";
import {create} from "react-test-renderer";


describe("Button component", () => {
    // test("status from props should be in the state", () => {
    //     const component = create(<ProfileStatus status={"it-kamasutra.com"}/>);
    //     const index = component.getInstance();
    //     expect(index.state.status).toBe("it-kamasutra.com");
    // })
    //
    // test("after creation <span> should be displayed with correct status", () => {
    //     const component = create(<ProfileStatus status={"it-kamasutra.com"}/>);
    //     const root = component.root
    //     const span = root.findByType("span")
    //     expect(span).not.toBeNull()
    // });
    //
    // test("after creation <input> should be displayed with correct status", () => {
    //     const component = create(<ProfileStatus status={"it-kamasutra.com"}/>);
    //     const root = component.root
    //     expect(() => {
    //         const input = root.findByType("input")
    //     }).toThrow()
    // })
    //
    // test("after creation <span> should be displayed with correct status", () => {
    //     const component = create(<ProfileStatus status={"it-kamasutra.com"}/>);
    //     const root = component.root
    //     const span = root.findByType("span")
    //     expect(span.children[0]).toBe("it-kamasutra.com");
    // })
    //
    // test("<input> should be displayed in editMode instead of <span>", () => {
    //     const component = create(<ProfileStatus status={"it-kamasutra.com"}/>);
    //     const root = component.root
    //     const span = root.findByType("span")
    //     span.props.onDoubleClick()
    //     const input = root.findByType("input")
    //     expect(input.props.value).toBe("it-kamasutra.com");
    // })
    //
    // test("callback should be called", () => {
    //     const mackCallback = jest.fn()
    //     const component = create(<ProfileStatus status={"it-kamasutra.com"} updateStatus={mackCallback}/>);
    //     const index = component.getInstance()
    //     index.deActivateEditMode()
    //     expect(mackCallback.mock.calls.length).toBe(1);
    // })

})