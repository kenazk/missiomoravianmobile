$(document).ready(function() {

    var url = 'http://fetchrss.com/rss/58191cb88a93f87f4ee0dfdd22358496719.xml';
    var description = document.getElementById('body')

    feednami.load(url,function(result){
        if(result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            console.log(entries[0].description)
            description.innerHTML = entries[0].description
        }
    });
});
