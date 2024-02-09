const datas = [
    {
        id:"1",
        title:"A Simple Component",
        answer:"React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props."

    },
    {
        id:"2",
        title:"A Stateful Component",
        answer:"In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render()."

    },
    {
        id:"3",
        title:"An Application",
        answer:"Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation."

    },
]

export default datas;