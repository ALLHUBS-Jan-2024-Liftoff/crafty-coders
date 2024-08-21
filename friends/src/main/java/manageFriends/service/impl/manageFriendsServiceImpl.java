package manageFriends.service.impl;
import lombok.AllArgsConstructor;
import manageFriends.dto.manageFriendsDto;
import manageFriends.mapper.friendsMapper;
import manageFriends.repository.manageFriendsRepository;
import manageFriends.service.manageFriendsService;
import org.springframework.stereotype.Service;
import manageFriends.entity.manageFriends;

@Service
@AllArgsConstructor
public class manageFriendsServiceImpl implements manageFriendsService{
    private manageFriendsRepository mngFriendsRepository;

    @Override
    public manageFriendsDto addFriends(manageFriendsDto mngFriendsDto) {
       manageFriends mngFriends = friendsMapper.mapToManageFriends(mngFriendsDto);
       manageFriends savedFriend = mngFriendsRepository.save(mngFriends);
       return friendsMapper.mapToManageFriendsDto(savedFriend);

    }
}
