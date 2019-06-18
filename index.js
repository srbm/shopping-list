$(
    function handleSubmit() {
        
        $('#js-shopping-list-form').submit(e => {
            e.preventDefault();
            const listItem = $('#shopping-list-entry').val();
            console.log(listItem);
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
        });
    }
)