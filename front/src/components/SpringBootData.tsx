interface Props {
    springBootData: string
}

export const SpringBootData = (props: Props) => {
    return (
        <div id="profile-div">
            <p><strong>Spring Boot Data: </strong> {props.springBootData}</p>
        </div>
    );
};
