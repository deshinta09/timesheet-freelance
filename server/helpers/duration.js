function formatTime(start,end) {
    start = start.split(':')
    end = end.split(':')
    !start[2] ? start[2] = 0 : ""
    !end[2] ? end[2] = 0 : ""
    
    if(Number(end[1]) < Number(start[1])){ // menit
        end[0] = Number(end[0]) - 1 // jam kurang 1
        end[1] = Number(end[1]) + 60 // menit tambah 60
        if(Number(end[2]) < Number(start[2])){ // detik
            end[1] = Number(end[1]) - 1 // menit kurang 1
            end[2] = Number(end[2]) + 60 // detik tambah 60
        }
    } else if(Number(end[2]) < Number(start[2])){ // detik
        end[1] = Number(end[1]) - 1 // menit kurang 1
        end[2] = Number(end[2]) + 60 // detik tambah 60
    }

    let hours = Number(end[0]) - Number(start[0]) 
    let minutes = Number(end[1]) - Number(start[1])
    let second = Number(end[2]) - Number(start[2])

    if (second>=60){
        second = second - 60
        minutes++
        if (minutes>=60){
            minutes = minutes - 60
            hours++
        }
    } else if (minutes>=60){
        minutes = minutes - 60
        hours++
    } 

    hours.toString().length === 1 ? hours = `0${hours}` : ''
    minutes.toString().length === 1 ? minutes = `0${minutes}` : ''
    second.toString().length === 1 ? second = `0${second}` : ''

    return `'${hours}:${minutes}:${second}'`
}

module.exports = formatTime
