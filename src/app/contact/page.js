export default function ContactPage() {
    return (
        <main >

            <div className="contactBackground">
                <p className="contactinfo">I’d love to hear from you! Whether you have questions, collaboration ideas, or just want to chat, I’m here to connect. I make it a priority to respond to all messages within 24 hours, so feel free to reach out.

</p>
                <form>
                    <label>
                        Name<br />
                        <input type="text" name="name" />
                    </label><br />
                    <label>
                        Email<br />
                        <input type="email" name="email" />
                    </label><br />
                    <label>
                        Message<br />
                        <textarea name="message" rows="4" cols="50"></textarea>
                    </label><br />
                    <button type="submit">Send</button>
                </form>
            </div>
        </main>
    );
}