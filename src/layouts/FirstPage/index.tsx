import Page from '../page'
import data from '../../Fixtures/first.json'
import Card from "../../components/Card/Card.tsx";
function First() {
    return (
        <div>
            <Page>
                <div className="cards">
                    {data.map((object) => (
                        <Card key={object.id} title={object.title} buttonName={object.buttonName}>
                            <ul>
                                {object.list.map(item => {
                                    <li>
                                        item
                                    </li>
                                })}
                            </ul>
                        </Card>
                    ))}
                </div>
            </Page>
        </div>
    )
}
export default First