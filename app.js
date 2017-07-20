// Single state object
var state = {
    items: []
};

// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
    console.log(item);
    console.log(state);
};

// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        
        return '<li><span class="shopping-item js-shopping-item">'+item+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
    });
    element.html(itemsHTML);
    console.log(itemsHTML);
};

// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    event.stopPropagation();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
    
    $('#shopping-list-entry').val('');
});

$('.shopping-list').on('click','.shopping-item-toggle',function(event) {
    event.preventDefault();
    event.stopPropagation();
    // console.log(this);
    var thisClass = $(event.target).closest("li").find($('.js-shopping-item'));
    // thisClass.find('span').prop('class');
    console.log(thisClass);
    // $('.shopping-item').removeClass('shopping-item');
    thisClass.toggleClass('shopping-item__checked')
 
});


$('.shopping-list').on('click','.shopping-item-delete',function(event) {
    event.preventDefault();
    event.stopPropagation();
    // console.log(this);
    $(event.target).closest("li").remove();
  
});