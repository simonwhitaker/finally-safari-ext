if (document.getElementById('productheader') || document.getElementById('productbrowser')) {
    var tags = ['h1', 'h2', 'h3'];
    var headings = [];

    // Step down through h1, then h2, then h3 - use the first level of headings we
    // find with text content.
    for (var i = 0; i < tags.length; i++)
    {
        var temp_headings = document.getElementById('main').getElementsByTagName(tags[i]);
        for (var j = 0; j < temp_headings.length; j++)
        {
            var temp_heading = temp_headings[j];
            if (temp_headings[j].innerText != '') 
            {
                headings.push(temp_headings[j]);
            }
        }
        if (headings.length > 0) {
            break;
        }
    }

    var epithets = [
        'Finally.',
        'At last.',
        'Better late than never.',
        'What took us so long?',
        'It\'s about time.',
        'You\'ve waited long enough.',
        'No, seriously.',
    ];

    var epithet_index = 0;

    for (var i = 0; i < headings.length; i++)
    {
        var h = headings[i];
    
        if (h.innerText === '' || h.innerText.match("\\?$"))
            continue;
        if (!h.innerText.match("\\.$")) {
            h.innerText = h.innerText + '.';
        }
        h.innerText = h.innerText + ' ' + epithets[epithet_index];
    
        epithet_index = (epithet_index + 1) % epithets.length;
    }
}