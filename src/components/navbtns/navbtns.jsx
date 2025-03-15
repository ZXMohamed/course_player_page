import { Button } from "reactstrap";


export function Navbtns() { 
    return (
        <section className='pageshortcut'> 
            <Button outline className='pageshortcutbtn bi-list-ul'></Button>
            <Button outline className='pageshortcutbtn bi-chat-left-dots'></Button>
            <Button outline className='pageshortcutbtn  bi-check-circle'></Button>
            <Button outline className='pageshortcutbtn bi-question-circle'></Button>
        </section>
    )
}