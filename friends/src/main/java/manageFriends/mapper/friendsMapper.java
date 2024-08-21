package manageFriends.mapper;

import manageFriends.dto.manageFriendsDto;
import manageFriends.entity.manageFriends;

public class friendsMapper {
    public static manageFriendsDto mapToManageFriendsDto(manageFriends manageFriends) {
        return new manageFriendsDto(
                manageFriends.getId(),
                manageFriends.getFirstName(),
                manageFriends.getLastName(),
                manageFriends.getPhoneNumber(),
                manageFriends.getEmailId()
        );
    }

    public static manageFriends mapToManageFriends(manageFriendsDto manageFriendsDto) {
        return new manageFriends(
                manageFriendsDto.getId(),
                manageFriendsDto.getFirstName(),
                manageFriendsDto.getLastName(),
                manageFriendsDto.getPhoneNumber(),
                manageFriendsDto.getEmailId()
        );
    }
}