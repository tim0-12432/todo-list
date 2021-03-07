
function Undo({ lastStep, setLastStep, setTodos }) {
    function undoHandler() {
        if (lastStep.before.length === lastStep.now.length) {
            for (let i = 0; i < lastStep.before.length; i++) {
                if (
                    lastStep.before[i].text !== lastStep.now[i].text ||
                    lastStep.before[i].completed !== lastStep.now[i].completed ||
                    lastStep.before[i].sub !== lastStep.now[i].sub
                ) {
                    setTodos(
                        lastStep.now.map((item) => {
                            if (item.id === lastStep.now[i].id) {
                                return lastStep.before[i];
                            }
                            return item;
                        })
                    );
                    setLastStep({now: {}, before: {}});
                }
            }
        } else {
            setTodos(
                lastStep.before.filter(item => item.text !== "example-66666")
            );
            setLastStep({now: {}, before: {}});
        }
    };

    return (
        <div className="undo-btn"
            onClick={ undoHandler }
            style={{ display: `${ (lastStep === {now: {}, before: {}} || lastStep.before[0] === undefined) ? "none" : "flex" }` }}
        >
            <i className="fas fa-undo" />
        </div>
    );
}

export default Undo;