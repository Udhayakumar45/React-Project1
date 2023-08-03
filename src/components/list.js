import './list.css';

export default function list(){
    return (
        <div className="List">
                <h1>NOTE:Create all the list elements as Links</h1>
    <ol className='Hello'>
        <li>History
            <ol type="i">
                <li>Background</li>
                <li>Foundation</li>
                <li>Expansions and termination</li>
            </ol>
        </li>
        <li>Administration</li>
        <li>Organisation
            <ol type="i">
                <li>Tournament format</li>
                <li>Player acquisition, quad composition and salaries</li>
                <li>Match rules</li>
                <li>Prize money</li>
            </ol>
        </li>
        <li>Teams
            <ol type="i">
                <li>Current teams</li>
                <li>Defunct teams</li>
                <li>Timeline</li>
            </ol>
        </li><li>Tournament seasons and results
            <ol type="i">
                <li>Performance in the IPL by title</li>
                <li>IPL season results</li>
            </ol>
        </li><li>Teams performance
            <ol type="i">
                <li>League stage positions</li>
            </ol>
        </li><li>Awards
            <ol type="i">
                <li>Orange Cap</li>
                <li>Purple Cap</li>
                <li>Most Valuable Player</li>
                <li>Faimlay Award</li>
                <li>Emerging player award</li>
                <li>Most scores Award</li>
            </ol>
        </li><li>Financials
            <ol type="i">
                <li>Title Sponsorship</li>
                <li>Payments to foriegn national bonds</li>
                <li>Brand value</li>
            </ol>
        </li><li>Broadcasting
            <ol type="i">
                <li>Sony and WSG(2008-2017)</li>
                <li>Star India(2018-2022)</li>
                <li>2023-2027</li>
                <li>International broadcasters</li>
            </ol>
        </li><li>Controversy
            <ol type="i">
                <li>2012 and 2013 IPL spot facing and betting match</li>
                <li>Sponsorship</li>
            </ol>
        </li>
        <li>See also</li>
        <li>References</li>
        <li>External links</li>

    </ol>
        </div>
    );
}