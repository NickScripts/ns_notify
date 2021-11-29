RegisterNetEvent('ns_notify:sendNotification')
AddEventHandler('ns_notify:sendNotification', function(message, options)
    sendNotification(message, options)
end)

function sendNotification(message, options)
    options = options or {}
    options.type = options.type or 'success'
    options.variant = options.variant or 'standard'
    options.vertical = options.vertical or 'top'
    options.horizontal = options.horizontal or 'right'
    options.duration = options.duration or 3500

    if not message then return end

    SendNUIMessage({
        action="display",
        type=options.type,
        variant=options.variant,
        vertical=options.vertical,
        horizontal=options.horizontal,
        duration=options.duration,
        message=message
    })
end