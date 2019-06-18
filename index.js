$(function handleSubmit() {
    $('#js-shopping-list-form').submit(e => {
        e.preventDefault();
        const listItem = $('#shopping-list-entry').val();
        $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`)
    })
});
$(function handleCheckButton() {
    $('.shopping-item-toggle').click( e => {
        console.log($(e.currentTarget).closest('span'));
        $(e.currentTarget).parents().siblings('span').toggleClass('shopping-item__checked');
    })
})
$(function handleDeleteButton() {
    $('.shopping-item-delete').click(e => {
        $(e.currentTarget).closest('li').remove();
    });
});