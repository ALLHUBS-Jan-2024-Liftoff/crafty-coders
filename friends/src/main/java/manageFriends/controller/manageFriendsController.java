package manageFriends.controller;

import lombok.AllArgsConstructor;
import manageFriends.dto.manageFriendsDto;
import manageFriends.service.manageFriendsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/manageFriends")
@AllArgsConstructor
public class manageFriendsController {
    private manageFriendsService mngFriendsService;
    @PostMapping
    public ResponseEntity<manageFriendsDto>AddFriends(@RequestBody manageFriendsDto mngFriendsDto)
    {
        manageFriendsDto saveFriends = mngFriendsService.addFriends(mngFriendsDto);
                return new ResponseEntity<>(saveFriends, HttpStatus.CREATED);
    }

}
